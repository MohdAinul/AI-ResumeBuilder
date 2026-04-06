import ModernTemplate from "../assets/templates/ModernTemplate";
import MinimalImageTemplate from "../assets/templates/MinimalImageTemplate";
import MinimalTemplate from "../assets/templates/MinimalTemplate";
import ClassicTemplate from "../assets/templates/ClassicTemplate";
import CorporateATSTemplate from "../assets/templates/CorporateATSTemplate.jsx";

const ResumePreview = (props) => {
  const { data, template, accentColor, classes = "" } = props;

  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />;
        break;
      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor} />;
        break;
      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />;
        break;
      case "corporateATSTemplate":
        return <CorporateATSTemplate data={data} accentColor={accentColor} />;
        break;

      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />;
    }
  };

  return (
    <div className="w-full bg-gray-100">
      <div
        id="resume-preview"
        className={
          "border border-gray-200 print:shadow-none print:border-none" + classes
        }
      >
        {renderTemplate()}
      </div>

      <style jsx>
        {`
          @page {
            size: letter;
            margin: 0;
          }
          @media print {
            html,
            body {
              width: 8.5in;
              height: 11in;
              overflow: hidden;
            }
            body * {
              visibility: hidden;
            }
            #resume-preview,
            #resume-preview * {
              visibility: visible;
            }
            #resume-preview {
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: auto;
              margin: 0;
              padding: 0;
              box-shadow: none !important;
              border: none !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ResumePreview;
