import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from './../../services/user.service';
import { GLOBAL } from './../../services/global';
import { Publication } from './../../models/publication';
import { PublicationService } from './../../services/publication.service';
import { UploadService } from './../../services/upload.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  providers: [UserService, PublicationService, UploadService]
})
export class SidebarComponent implements OnInit {

  public identity;
  public token;
  public stats;
  public url;
  public status;
  public publication: Publication;
  public filesToUpload;
  // Output
  @Output() sended = new EventEmitter();

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _publicationService: PublicationService,
    private _uploadService: UploadService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
    this.stats = this._userService.getStats();
    this.url = GLOBAL.url;
    this.publication = new Publication('', '', '', '', this.identity._id);
    this.filesToUpload = new Array<File>();
  }

  ngOnInit(): void {
  }

  onSubmit(form, $event) {
    this._publicationService.addPublication(this.token, this.publication).subscribe(
      response => {
        if (response.publication) {

          // Subir imagen
          if (this.filesToUpload && this.filesToUpload.length) {
            // tslint:disable-next-line: max-line-length
            this._uploadService.makeFileRequest(this.url + 'upload-image-publication/' + response.publication._id, [], this.filesToUpload, this.token, 'image')
              .then((resultado: any) => {
                this.status = 'success';
                this.publication.file = resultado.image;
                form.reset();
                this._router.navigate(['/timeline']);
                this.sended.emit({ send: true });
              })
              .catch(error => {
                console.log(error);
                form.reset();
              });
          } else {
            this.status = 'success';
            form.reset();
            this._router.navigate(['/timeline']);
            this.sended.emit({ send: true });
          }

        } else {
          this.status = 'error';
        }
      },
      error => {
        const errorMessage = error as any;
        console.log(errorMessage);
        if (errorMessage !== null) {
          this.status = 'error';
        }
      }
    );
  }

  // Método para añadir imagen a la publicación
  fileChangeEvent(fileInput: any) {
    this.filesToUpload = fileInput.target.files;
  }

  sendPublication(event) {
    this.sended.emit({ send: true });
  }

}
