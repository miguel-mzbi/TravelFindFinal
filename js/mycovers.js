var canvas_compatible = false;

try {
    canvas_compatible = !!(document.createElement('canvas').getContext('2d'));
} catch (e) {}

if (canvas_compatible) 
    document.getElementById("__cvfl-coverflow-holder").style.display = "";
else 
    document.getElementById("oldlist").style.display="";	
	
if (canvas_compatible) {
	
    window.onload = function() {

        Coverflow.init([

            {src: 'CoverFlows_files/covers/img1large.jpg',
            label: {name: 'Family 1', description: 'The Family 1 Story', high:'CoverFlows_files/covers/img1large.jpg'}},

            {src: 'CoverFlows_files/covers/img2large.jpeg',
            label: {name: 'Family 2', description: 'The Family 2 Story', high:'CoverFlows_files/covers/img2large.jpeg'}},

            {src: 'CoverFlows_files/covers/img3large.jpg',
            label: {name: 'Person 1', 
                    description: '<p>The Person 1 Story ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- hhhhhhhhhhhhhhhhh</p>', 
                    high:'CoverFlows_files/covers/img3large.jpg'}},

            {src: 'CoverFlows_files/covers/img4large.jpg',
            label: {name: 'Person 2', description: 'The Person 2 Story', high:'CoverFlows_files/covers/img4large.jpg'}},
        ],

        {   createLabel: function(item){
                return item.label.name +'<br><span id="description">'+ item.label.description + '</span>';
            },

            onSelectCenter: function(item,id){

                var img = new Image();
                img.onload = function(){ 

                    Lightbox.show(this.src,id);	
                }; 

                

            },

            refill: function(start){
                new HTTPQuery("/ajax/cflow/0/?from="+start+"&l=1&cache=3998668924011356071",0,"updateCflow");
            }		
        });
    }
}
	
function updateCflow(oHttp) {
    cResponse = oHttp.responseText;
    if (cResponse.substr(0,1)=="!"){
        cResponse=cResponse.substr(1);
        eval(cResponse);
    }
}