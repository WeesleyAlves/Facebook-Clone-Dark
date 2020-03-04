var pub_id=0;

var postFeed = `<div id="pub${pub_id}" class="pub-feed">

<div class="header-pub-feed">
    <div class="info-autor">
        <div class="img-autor"></div>
        <div class="name-autor">Maria Joana Das Graças</div>
    </div>
    
    <div class="options-pub">...</div>
</div>

<div class="body-pub-feed">
    <p class="text-pub-feed">Eu nem tenho legenda pra colocar aqui, o lance é só teste mesmo, entao vai isso aqui</p>
    <figure class="img-pub-feed"></figure>
</div>

<div class="footer-pub-feed">
    <div class="statistics-pub-feed">
        <p class="total-likes-pub-feed"></p>
        <p class="total-coments-pub-feed"></p>
        <p class="total-shares-pub-feed"></p>
    </div>

    <div class="actions-pub-feed">
        <div class="btn-pub-feed">
            <div class="icon-btn-pub-feed"></div>
            <div class="text-btn-pub-feed">Like</div>
        </div>
        <div class="btn-pub-feed">
            <div class="icon-btn-pub-feed"></div>
            <div class="text-btn-pub-feed">Comentar</div>
        </div>
        <div class="btn-pub-feed">
            <div class="icon-btn-pub-feed"></div>
            <div class="text-btn-pub-feed">Compartilhar</div>
        </div>
    </div>
</div>

</div>`;

function gerarFeed() {
    var containerFeed = document.getElementById("container-feed");

    while(pub_id<5){
        containerFeed.innerHTML+=postFeed;
        pub_id++;
        //alert(pub_id);
    }


}

gerarFeed();


