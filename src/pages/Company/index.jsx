import { CompanyDetails, CompanyFooter, CompanyInfoHeader } from "./styles";

export default function Company() {
  return (
    <>
      <CompanyInfoHeader>
        <img src="" alt="Scoot" />

        <div>
          <div>
            <h1>Company Page</h1>
            <span>scoot.com</span>
          </div>
          <button>Company Site</button>
        </div>
      </CompanyInfoHeader>
      <CompanyDetails>
        <span>1w ago * Part Time</span>
        <h2>Senior Software Engineer</h2>
        <span>United Kingdon</span>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
          ante et vulputate volutpat, eros pede semper est, vitae luctus metus
          libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
          quis, gravida id, est. Sed lectus. Praesent elementum hendrerit
          tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a
          ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien
          ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus
          sed, urna.
        </p>
        <h3>Requirements</h3>
        <p>
          Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a
          ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
          libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
          varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam
          pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida
          vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu,
          vulputate vel, nisl.
        </p>
        <ul>
          <li>Morbi interdum mollis sapien. Sed</li>
          <li>Morbi interdum mollis sapien. Sed</li>
          <li>Morbi interdum mollis sapien. Sed</li>
          <li>Morbi interdum mollis sapien. Sed</li>
        </ul>
        <h3>What You Will Do</h3>
        <p>
          Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Sed lectus. Praesent elementum
          hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat,
          lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc
          sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et,
          dapibus sed, urna.
        </p>
        <ul>
          <li>
            <img src="" alt="" />1 Morbi interdum mollis sapien. Sed
          </li>
          <li>
            <img src="" alt="" />1 Morbi interdum mollis sapien. Sed
          </li>
          <li>
            <img src="" alt="" />1 Morbi interdum mollis sapien. Sed
          </li>
          <li>
            <img src="" alt="" />1 Morbi interdum mollis sapien. Sed
          </li>
        </ul>
      </CompanyDetails>
      <CompanyFooter>
        <div>
          <div>
            <p>Senior Software Engineer</p>
            <span>So Digital Inc.</span>
          </div>
        </div>
        <button>Apply Now</button>
      </CompanyFooter>
    </>
  );
}
