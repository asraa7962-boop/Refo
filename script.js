const scenes = document.querySelectorAll(".scene");


function goToScene(sceneId) {

    scenes.forEach(scene => {
        scene.classList.remove("active");
    });


    const targetScene =
        document.getElementById(sceneId);


    if (!targetScene) return;


    targetScene.classList.add("active");


    /* Re-trigger meaning animations */

    if (sceneId === "meaning") {

        const strands =
            targetScene.querySelectorAll(".strand");

        strands.forEach(strand => {

            strand.style.animation = "none";

            strand.offsetHeight;

            strand.style.animation = "";

        });


        const words =
            targetScene.querySelectorAll(
                ".meaning-reveal span"
            );


        words.forEach(word => {

            word.style.animation = "none";

            word.offsetHeight;

            word.style.animation = "";

        });

    }

}


document.addEventListener(
    "keydown",
    function(event) {

        const activeScene =
            document.querySelector(
                ".scene.active"
            );


        if (!activeScene) return;


        const currentIndex =
            Array.from(scenes)
                .indexOf(activeScene);


        if (
            event.key === "ArrowDown" ||
            event.key === "ArrowRight"
        ) {

            if (
                currentIndex <
                scenes.length - 1
            ) {

                goToScene(
                    scenes[currentIndex + 1].id
                );

            }

        }


        if (
            event.key === "ArrowUp" ||
            event.key === "ArrowLeft"
        ) {

            if (currentIndex > 0) {

                goToScene(
                    scenes[currentIndex - 1].id
                );

            }

        }

    }
);



let touchStartY = 0;


document.addEventListener(
    "touchstart",
    function(event) {

        touchStartY =
            event.changedTouches[0].screenY;

    },
    { passive: true }
);


document.addEventListener(
    "touchend",
    function(event) {

        const touchEndY =
            event.changedTouches[0].screenY;


        const difference =
            touchStartY - touchEndY;


        if (Math.abs(difference) < 50) {
            return;
        }


        const activeScene =
            document.querySelector(
                ".scene.active"
            );


        if (!activeScene) return;


        const currentIndex =
            Array.from(scenes)
                .indexOf(activeScene);


        if (difference > 0) {

            if (
                currentIndex <
                scenes.length - 1
            ) {

                goToScene(
                    scenes[currentIndex + 1].id
                );

            }

        } else {

            if (currentIndex > 0) {

                goToScene(
                    scenes[currentIndex - 1].id
                );

            }

        }

    },
    { passive: true }
);



window.addEventListener(
    "load",
    function() {

        setTimeout(() => {

            goToScene("opening");

        }, 3000);

    }
);
