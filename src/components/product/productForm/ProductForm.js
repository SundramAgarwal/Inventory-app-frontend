import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Card from "../../card/Card";

import "./ProductForm.scss";

const ProductForm = ({
  product,
  productImage,
  imagePreview,
  description,
  setDescription,
  handleInputChange,
  handleImageChange,
  saveProduct,
}) => {
  return (
    <div className="add-product">
      <Card cardClass={"card"}>
        <form onSubmit={saveProduct}>
          <Card cardClass={"group"}>
            <label>Product Image</label>
            <code className="--color-dark">
              Supported Formats: jpg, jpeg, png
            </code>
            <input
              type="file"
              name="image"
              onChange={(e) => handleImageChange(e)}
            />

            {imagePreview != null ? (
              <div className="image-preview">
                <img src={imagePreview} alt="product" />
              </div>
            ) : (
              <p>No image set for this product.</p>
            )}
          </Card>
          <label>Product Name:</label>
          <input
            type="text"
            placeholder="Product name"
            name="name"
            value={product?.name}
            onChange={handleInputChange}
          />

          <label>Product Category:</label>
          <select
            name="category"
            value={product?.category}
            onChange={handleInputChange}
            required
          >
            <option value="">Select a Category</option>
            <option value="Televisions and Home Entertainment">
              Televisions and Home Entertainment
            </option>
            <option value="Computers and Laptops">Computers and Laptops</option>
            <option value="Smartphones and Accessories">
              Smartphones and Accessories
            </option>
            <option value="Kitchen Appliances">Kitchen Appliances</option>
            <option value="Laundry Appliances">Laundry Appliances</option>
            <option value="Small Kitchen Gadgets">Small Kitchen Gadgets</option>
            <option value="Home Climate Control">Home Climate Control</option>
            <option value="Personal Care Electronics">
              Personal Care Electronics
            </option>
            <option value="Vacuums and Floor Care">
              Vacuums and Floor Care
            </option>
            <option value="Audio and Headphones">Audio and Headphones</option>
            <option value="Cameras and Photography">
              Cameras and Photography
            </option>
            <option value="Home Security and Surveillance">
              Home Security and Surveillance
            </option>
            <option value="Gaming Consoles and Accessories">
              Gaming Consoles and Accessories
            </option>
            <option value="Smart Home Devices">Smart Home Devices</option>
            <option value="Office Electronics">Office Electronics</option>
            <option value="Power and Charging Accessories">
              Power and Charging Accessories
            </option>
            <option value="Cables and Connectors">Cables and Connectors</option>
            <option value="Batteries and Chargers">
              Batteries and Chargers
            </option>
            <option value="Smartwatches and Wearables">
              Smartwatches and Wearables
            </option>
            <option value="Home Office Furniture">Home Office Furniture</option>
          </select>

          <label>Product Price:</label>
          <input
            type="text"
            placeholder="Product Price"
            name="price"
            value={product?.price}
            onChange={handleInputChange}
          />

          <label>Product Quantity:</label>
          <input
            type="text"
            placeholder="Product Quantity"
            name="quantity"
            value={product?.quantity}
            onChange={handleInputChange}
          />

          <label>Product Description:</label>
          <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription}
            modules={ProductForm.modules}
            formats={ProductForm.formats}
          />

          <div className="--my">
            <button type="submit" className="--btn --btn-primary">
              Save Product
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
};

ProductForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ align: [] }],
    [{ color: [] }, { background: [] }],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["clean"],
  ],
};
ProductForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "color",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "video",
  "image",
  "code-block",
  "align",
];

export default ProductForm;
