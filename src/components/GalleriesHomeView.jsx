const GalleryRow = ({ gallery}) => {
  const formattedDate = new Date(gallery.created_at).toLocaleString();
  const urls = JSON.parse(gallery.urls || "[]");
  const firstImageUrl = urls[0] || "";
  const description = gallery.description
    ? gallery.description.substring(0, 50) + "..."
    : "No description";

  return (
  <div className="col-md-4">
    <div className="card mb-4 box-shadow">
    <a href={`/galleries/${gallery.id}`}>
      <img className="card-img-top" src={firstImageUrl} alt={`${gallery.name}`} width="85" height="350"/>
      </a>
      <div className="card-body">
      <div>
      <h3><a href={`/galleries/${gallery.id}`} style={{ textDecoration: "none"}}>{gallery.name}</a></h3>
  </div>
    <p className="card-text">{description}</p>
    <div className="d-flex justify-content-between align-items-center">
      <div className="btn-group">
      <a href={`/galleries/${gallery.id}`}><button type="button" className="btn btn-sm btn-outline-danger">View</button></a>
      </div>
      <a href={`/authors/${gallery.user?.id}`} style={{ textDecoration: "none", color: "darkslategrey" }}>
        <small className="text-muted">Author: {gallery.user?.first_name} {gallery.user?.last_name}</small></a>
    </div>
    <small className="text-muted">Postad {formattedDate}</small>

    </div>
  </div>
  </div>
  );
};
export default GalleryRow;
