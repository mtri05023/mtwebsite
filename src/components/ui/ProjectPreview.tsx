import type { CSSProperties } from "react";
import type { Project } from "@/data/site";

type ProjectPreviewProps = {
  preview?: Project["preview"];
  accent?: string;
  compact?: boolean;
};

export function ProjectPreview({ preview = "business", accent = "#16a3d8", compact = false }: ProjectPreviewProps) {
  const style = { "--preview-accent": accent } as CSSProperties;

  return (
    <div className={`project-preview project-preview-${preview} ${compact ? "project-preview-compact" : ""}`} style={style}>
      <div className="project-preview-topbar">
        <span />
        <span />
        <span />
        <div />
      </div>
      <div className="project-preview-body">
        {preview === "cinema" ? <CinemaPreview /> : null}
        {preview === "bookstore" ? <BookstorePreview /> : null}
        {preview === "service" ? <ServicePreview /> : null}
        {preview === "medical" ? <MedicalPreview /> : null}
        {preview === "real-estate" ? <RealEstatePreview /> : null}
        {preview === "education" ? <EducationPreview /> : null}
        {preview === "portfolio" ? <PortfolioPreview /> : null}
        {preview === "business" ? <BusinessPreview /> : null}
      </div>
    </div>
  );
}

function BusinessPreview() {
  return (
    <>
      <div className="preview-hero">
        <div>
          <span />
          <strong />
          <p />
          <button />
        </div>
      </div>
      <div className="preview-grid three">
        <i />
        <i />
        <i />
      </div>
    </>
  );
}

function ServicePreview() {
  return (
    <>
      <div className="preview-split">
        <div>
          <span />
          <strong />
          <p />
          <button />
        </div>
        <aside>
          <b>Gọi ngay</b>
          <b>Zalo</b>
          <b>Báo giá</b>
        </aside>
      </div>
      <div className="preview-grid four">
        <i />
        <i />
        <i />
        <i />
      </div>
    </>
  );
}

function CinemaPreview() {
  return (
    <>
      <div className="preview-cinema-hero">
        <div />
        <div>
          <span />
          <strong />
          <p />
          <button />
        </div>
      </div>
      <div className="preview-posters">
        <i />
        <i />
        <i />
        <i />
      </div>
    </>
  );
}

function BookstorePreview() {
  return (
    <>
      <div className="preview-shop">
        <div>
          <span />
          <strong />
          <button />
        </div>
        <aside>
          <i />
          <i />
        </aside>
      </div>
      <div className="preview-products">
        <i />
        <i />
        <i />
      </div>
    </>
  );
}

function MedicalPreview() {
  return (
    <>
      <div className="preview-split calm">
        <div>
          <span />
          <strong />
          <p />
          <button />
        </div>
        <aside>
          <i />
          <i />
        </aside>
      </div>
      <div className="preview-grid three">
        <i />
        <i />
        <i />
      </div>
    </>
  );
}

function RealEstatePreview() {
  return (
    <>
      <div className="preview-realestate">
        <div />
        <aside>
          <strong />
          <p />
          <button />
        </aside>
      </div>
      <div className="preview-grid three">
        <i />
        <i />
        <i />
      </div>
    </>
  );
}

function EducationPreview() {
  return (
    <>
      <div className="preview-education">
        <div>
          <span />
          <strong />
          <p />
        </div>
      </div>
      <div className="preview-grid four">
        <i />
        <i />
        <i />
        <i />
      </div>
    </>
  );
}

function PortfolioPreview() {
  return (
    <>
      <div className="preview-portfolio">
        <div />
        <aside>
          <span />
          <strong />
          <p />
          <button />
        </aside>
      </div>
      <div className="preview-grid three">
        <i />
        <i />
        <i />
      </div>
    </>
  );
}
