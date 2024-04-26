export class Movie {
   id: any;
   title: any;
   genre: any;
   duration:any;
   imgUrl: any;
   constructor(id:any, title:any, genre:any, duration:any, imgUrl:any) {
      this.id = id;
      this.title = title;
      this.genre = genre;
      this.duration = duration;
      this.imgUrl = imgUrl;
   }

   getId(){
      return this.id;
   }
    getTitle(){
        return this.title;
    }
    getGenre(){
        return this.genre;
    }
    getDuration(){
        return this.duration;
    }
    getImgUrl(){
        return this.imgUrl;
    }
    setId(id:any){
        this.id = id;
    }
    setTitle(title:any){
        this.title = title;
    }
    setGenre(genre:any){
        this.genre = genre;
    }
    setDuration(duration:any){
        this.duration = duration;
    }
    setImgUrl(imgUrl:any){
        this.imgUrl = imgUrl;
    }



}
