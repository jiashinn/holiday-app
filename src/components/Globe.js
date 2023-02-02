import { useEffect, useState } from "react";
import ReactGlobe, { defaultDotMarkerOptions } from "react-globe";
import styled from "styled-components";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import Opening from "./Opening";

const StyledContainer = styled.div`
  ${(p) =>
    p.animation
      ? ""
      : `
      animation: fadeIn ease 5s;
  -webkit-animation: fadeIn ease 5s;
  -moz-animation: fadeIn ease 5s;
  -o-animation: fadeIn ease 5s;
  -ms-animation: fadeIn ease 5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-webkit-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-o-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-ms-keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
   `}
`;

const Globe = ({ focus, markers, onClickMarker, onDefocus }) => {
  const globeBackgroundTexture =
    "https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/background.png";
  const globeCloudsTexture =
    "https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/clouds2.png";
  const globeTexture =
    "https://raw.githubusercontent.com/chrisrzhou/react-globe/main/textures/globe_dark.jpg";

  const [isLoadingGlobeBackgroundTexture, setIsLoadingGlobeBackgroundTexture] =
    useState(true);
  const [isLoadingGlobeCloudsTexture, setIsLoadingGlobeCloudsTexture] =
    useState(true);
  const [isLoadingGlobeTexture, setIsLoadingGlobeTexture] = useState(true);

  let loader = (isLoadingGlobeBackgroundTexture ||
    isLoadingGlobeCloudsTexture ||
    isLoadingGlobeTexture) && (
    // <div
    //   style={{
    //     alignItems: "center",
    //     background: "black",
    //     bottom: 0,
    //     color: "white",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     left: 0,
    //     position: "absolute",
    //     right: 0,
    //     top: 0,
    //   }}
    // >
    //   Loading
    // </div>
    <Opening />
  );

  return (
    <>
      {loader}
      <StyledContainer
        animation={
          isLoadingGlobeBackgroundTexture &&
          isLoadingGlobeCloudsTexture &&
          isLoadingGlobeTexture
        }
      >
        <ReactGlobe
          initialCameraDistanceRadiusScale={3}
          height="100vh"
          width="100vw"
          globeBackgroundTexture={globeBackgroundTexture}
          globeCloudsTexture={globeCloudsTexture}
          globeTexture={globeTexture}
          onGlobeBackgroundTextureLoaded={() =>
            setIsLoadingGlobeBackgroundTexture(false)
          }
          onGlobeCloudsTextureLoaded={() =>
            setIsLoadingGlobeCloudsTexture(false)
          }
          onGlobeTextureLoaded={() => {
            setTimeout(() => {
              setIsLoadingGlobeTexture(false);
            }, 2000);
          }}
          markers={markers}
          options={{
            focusAnimationDuration: 1000,
            // focusDistanceRadiusScale: 2,
            // focusEasingFunction: ["Elastic", "In"],
            cameraRotateSpeed: 0.5,
            markerRadiusScaleRange: [0.005, 0.02],
            markerType: "dot",
            markerTooltipRenderer: (marker) =>
              `${marker.country}: ${marker.total_holidays} days`,
          }}
          onClickMarker={(marker, markerObject, event) => {
            onClickMarker && onClickMarker(marker, markerObject, event);
          }}
          focus={focus}
          onDefocus={onDefocus}
        />
      </StyledContainer>
    </>
  );
};

export default Globe;
