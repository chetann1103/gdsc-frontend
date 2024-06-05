import{items}from"./data.js";
const formEle=document.getElementById("item-form");
const listEle=document.getElementById("list-container");
const locEle=document.getElementById("location");
const placEle=document.getElementById("place");
const planEle=document.getElementById("plan");
const imageEle=document.getElementById("image");
const dateEle=document.getElementById("date");
const linkEle=document.getElementById("link");


function renderlist(){
    listEle,innerHTML=items.map((item)=><div class="card">
    <img
      src=${items.image} alt=${items.place}/>
      alt="Taj-Mahal"
    />
    <div class="card-content">
      <div class="card-header">
        <div class="card-header-text">
          <a
            target="_blank"
            href=${items.link}>${items.placEle}
            >Taj Mahal</a
          >
          <p>Agra, India</p>
        </div>
        <div class="card-header-actions">
          <button>
            <img src="./assets/edit-icon.svg" alt="edit-button" />
          </button>
          <button>
            <img src="./assets/trash-icon.svg" alt="delete-button" />
          </button>
        </div>
      </div>
      <p>
        I'm looking forward to leisurely walking through the lush gardens
        surrounding the Taj. I'll keep my camera ready for every
        picturesque corner.
      </p>
      <p class="card-footer">26 May 2024</p>
    </div>
  </div>
))}