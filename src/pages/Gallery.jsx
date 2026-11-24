import DomeGallery from "../components/DomeGallery";
import { GALLERY } from "../content";
import { SectionHead } from "../components/ui";

export default function Gallery({ index }) {
  return (
    <section id="gallery" className="section-y bg-surface pb-0">
      <div className="container-x">
        <SectionHead
          index={index}
          eyebrow={GALLERY.eyebrow}
          title={GALLERY.title}
          intro={GALLERY.intro}
          action={<span className="eyebrow hidden sm:inline">{GALLERY.hint}</span>}
          className="!mb-0"
        />
      </div>
      <div className="h-[78svh] w-full md:h-[92svh]">
        <DomeGallery
          images={GALLERY.images}
          fit={0.85}
          minRadius={750}
          maxVerticalRotationDeg={2}
          segments={30}
          dragDampening={2}
          grayscale={false}
          overlayBlurColor="var(--surface)"
          imageBorderRadius="14px"
          openedImageBorderRadius="14px"
        />
      </div>
    </section>
  );
}
