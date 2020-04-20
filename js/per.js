$(function(){
    var persons = [
      { name: 'Dahlia Elfadil', picture: 'sonny.jpg', category: 'Project Manager', mail:'projektledare.massing@ingsekt.se' , link:'https://www.linkedin.com/in/dahlia-elfadil-b068a6128/' },
        { name: 'Abusalam Yabrak', picture: 'abdelsalem.jpg', category: 'IT Committee', mail:'abdusalam_yabrak.massing@ingsekt.se' , link:'https://www.linkedin.com/in/abdusalam-yabrak-769593176/' },
        { name: 'Adnan Arko', picture: 'adnan.jpg', category: 'Logistic and Event Committee', mail:'adnan_arko.massing@ingsekt.se' , link:'' },
        { name: 'Aisha Ugljanin', picture: 'aisha.jpg', category: 'Company & Event Committee', mail:'aisha_ugljanin.massing@ingsekt.se' , link:'https://www.linkedin.com/in/aisha-kujovic-ugljanin-0210407a/' },
        { name: 'Aml Abbas', picture: 'aml.jpg', category: 'IT Committee', mail:'aml_abbas.massing@ingsekt.se' , link:'https://www.linkedin.com/in/aml-abbas-b96a4a131/' },
        { name: 'Fanny Zolotarevskaia', picture: 'fanny.jpg', category: 'Event Committee' , mail:'fanny_zolotarevskaia.massing@ingsekt.se' , link:'https://www.linkedin.com/in/fannyzolotarevskaia/'},
        { name: 'Fatima Doussi', picture: 'fatima.jpg', category: 'Company Committee', mail:'fatima_doussi.massing@ingsekt.se' , link:'https://www.linkedin.com/in/fatima-zahra-doussi-712b95193/' },
        { name: 'Jovan Panic', picture: 'jovan.jpg', category: 'Company Committee', mail:'jovan_panicsa.massing@ingsekt.se' , link:'https://www.linkedin.com/in/jovan-panic-438782128/' },
        { name: 'Julio Frenandez',  picture: 'julio.jpg', category: 'Company Committee' , mail:'julio_fernandez_amodia.massing@ingsekt.se' , link:'https://www.linkedin.com/in/juliofernandezamodia/'},
        { name: 'Li Zhu',  picture: 'li.jpg', category: 'IT Committe', mail:'li_zhu.massing@ingsekt.se' , link:'https://www.linkedin.com/in/li-zhu-623b51193/' },
        { name: 'Mohammed Labib', picture: 'labib.jpg', category: 'Company Committee' , mail:'mohammed_labib.massing@ingsekt.se' , link:'https://www.linkedin.com/in/m-labeeb-elsayed/'},
        { name: 'Mohsen Bayat', picture: 'bayat.jpg', category: 'Company Committee' , mail:'iman_bayat_pour.massing@ingsekt.se' , link:'https://www.linkedin.com/in/mohsen-bayat-pour-97a49975/'},
        { name: 'Nadjma Zaher', picture: 'nadjma.jpg', category: 'Company Committee', mail:'nadjma_zaher.massing@ingsekt.se' , link:'https://www.linkedin.com/in/nadjma-zaher-96775a178/' },
        { name: 'Rohullah Hussaini', picture: 'rohualah.jpg', category: 'Logistic and Event Committee', mail:'rohullah_hussaini.massing@ingsekt.se' , link:'https://www.linkedin.com/in/rohullah-hussaini-701867197/' },
        { name: 'Rose Huang', picture: 'rose.jpg', category: 'Sponsor Committee', mail:'rose_huang.massing@ingsekt.se' , link:'https://www.linkedin.com/in/rosehwang/' },
        { name: 'Saba Salehi', picture: 'saba.jpg', category: 'Company Committee' , mail:'saba_salehi.massing@ingsekt.se' , link:''},
        { name: 'Sabah Zaarif', picture: 'sabah.jpg', category: 'Company Committee', mail:'sabah_zaarif.massing@ingsekt.se' , link:'https://www.linkedin.com/in/sabah-z-8b0357123/' },
        { name: 'Stevson Sonny Widjaja', picture: 'sonny.jpg', category: 'Company Committee', mail:'stevson_sonny_widjaja.massing@ingsekt.se' , link:'https://www.linkedin.com/in/stevson-widjaja-43b34b12b/' },
        { name: 'Zainab Ajoubi', picture: 'sonny.jpg', category: 'Company Committee', mail:'zainab_ajoubi.massing@ingsekt.se' , link:'https://www.linkedin.com/in/zainab-ajoubi-077626172/' },
        { name: 'Äsia Ahmad', picture: 'asia.jpg', category: 'Company Committee', mail:'sasia_ahmad.massing@ingsekt.se' , link:'https://www.linkedin.com/in/%C3%A4sia-ahmad-5b343a198/' }
         ];
  
// funktion som ligger till producter
var appendlist  = function(array, location){
    var template=array.map(function(item,id){
return `

                  <div class="card col m3 offset-s6">
                  <div class="card-image waves-effect waves-block waves-light">
                    <img class="activator" src="../pic/persons/${item.picture}">
                  </div>
                  <div class="card-content">
                    <span class="card-title activator grey-text text-darken-4 "><p class="gold name">${item.name}</p><i class="material-icons right">more_vert</i></span>
                    <p class="category">${item.category}</p>
                  </div>
                  <div class="card-reveal">
                    <span class="card-title grey-text text-darken-4 "><p class="gold">${item.name}</p><i class="material-icons right">close</i></span>

                    <a href="mailto:${item.mail}" target="_blank"><i class='far fa-envelope'></i></a> <a href="${item.link}" target="_blank"><i class='fab fa-linkedin'></i></a>
                    </div>
                </div>
                
`;
    });
    $(location).html(template);
};


appendlist(persons,$('.show_cotact'));
});
