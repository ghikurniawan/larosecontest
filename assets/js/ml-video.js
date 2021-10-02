(function() {

            var vplayer = document.querySelectorAll(".vplayer");

            for (var i = 0; i < vplayer.length; i++) {
                console.log(vplayer[i].dataset.v);
                var source = "https://img.youtube.com/vi/" + vplayer[i].dataset.v + "/sddefault.jpg";

                var image = new Image();
                image.src = source;
                image.className= "img-fluid w-100";
                image.addEventListener("load", function() {
                    vplayer[i].appendChild(image);
                }(i));

                vplayer[i].addEventListener("click", function() {

                    var iframe = document.createElement("iframe");

                    iframe.setAttribute("allowfullscreen", "");
                    iframe.setAttribute("frameborder", "0");
                    iframe.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.v + "?controls=0&showinfo=0&autoplay=1&modestbranding=1&rel=0");

                    this.innerHTML = "";
                    this.appendChild(iframe);
                });
            };

        })();