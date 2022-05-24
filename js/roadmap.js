const mainWrapper = document.querySelector(".main__wrapper.roadmap");
console.log(mainWrapper);
const mainGrid = document.querySelector(".main__grid");
const frameContainer = document.querySelector(".roadmap__frame__container");

const createElement = (elName, innerHTML, attributes) => {
  const elem = document.createElement(elName);
  if (innerHTML) elem.innerHTML = innerHTML;
  if (attributes.length) {
    attributes.forEach((attr) => {
      elem.setAttribute(attr.attrName, attr.attrVal);
    });
  }

  return elem;
};

let frameId;

const closeFrame = (e) => {
  frameContainer.classList.remove("open");
  frameContainer.innerHTML = "";
  mainGrid.classList.remove("frame__opened", `${frameId}_frame`);
  e.stopPropagation();
};

const createFrame = (frameData) => {
  frameAttrs.wrapperAttrs[1].attrVal = frameData.frameId + "_frame";
  const frameWrapper = createElement("div", null, frameAttrs.wrapperAttrs);
  const frameTitleBlock = createElement("div", null, frameAttrs.titleBlockAttrs);
  const frameTitle = createElement("h3", frameData.frameTitle, frameAttrs.titleAttrs);
  const closeFrameBtn = createElement("button", null, frameAttrs.closeBtnAttrs);
  const closeSpan = createElement("span", null, [
    { attrName: "class", attrVal: "icon-rm_close_ic" },
  ]);
  closeFrameBtn.append(closeSpan);
  closeFrameBtn.addEventListener("click", closeFrame);

  frameTitleBlock.append(frameTitle, closeFrameBtn);
  frameWrapper.append(frameTitleBlock);

  let frameSubtext, frameSubtitle;

  if (frameData.frameSubtext)
    frameSubtext = createElement("p", frameData.frameSubtext, frameAttrs.subtextAttrs);

  if (frameData.frameSubtitle)
    frameSubtitle = createElement("p", frameData.frameSubtitle, frameAttrs.subtitleAttrs);

  frameWrapper.append(
    frameTitleBlock,
    frameSubtext ? frameSubtext : "",
    frameSubtitle ? frameSubtitle : ""
  );

  if (frameData.frameParagraphs.length) {
    frameData.frameParagraphs.forEach((item) => {
      const text = createElement("p", item.text, frameAttrs.text);
      const textTitle = createElement("span", item.textTitle, frameAttrs.textTitle);
      text.prepend(textTitle);
      frameWrapper.append(text);
    });
  }

  if (frameData.btnText) {
    const frameBtn = createElement("button", null, frameAttrs.btn);
    const frameBtnIcon = createElement("span", null, frameAttrs.btnIcon);
    const frameBtnText = createElement("span", frameData.btnText, frameAttrs.btnText);
    frameBtn.append(frameBtnIcon, frameBtnText);
    frameWrapper.append(frameBtn);
  }

  if (frameData.imgs) {
    frameData.imgs.forEach((item) => {
      const img = createElement("img", null, [
        {
          attrName: "src",
          attrVal: item,
        },
      ]);
      frameWrapper.append(img);
    });
  }

  return frameWrapper;
};

mainGrid.addEventListener("click", (e) => {
  if (e.target.closest(".roadmap__ref")) {
    frameId = e.target.closest(".roadmap__ref").getAttribute("id");
    const frameData = roadmapFrameData.find((item) => item.frameId === frameId);
    frameContainer.classList.add("open");
    const frameWrapper = createFrame(frameData);
    frameContainer.append(frameWrapper);
    mainGrid.classList.add("frame__opened", `${frameId}_frame`);
  }
});
