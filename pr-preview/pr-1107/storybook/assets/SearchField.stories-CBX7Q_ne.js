import{r as m,f as l,j as t}from"./iframe-DfM6kEgP.js";import{S as d}from"./SearchField-DgKTFGD7.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-COtZI1KA.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-kzArnBYE.js";import"./utils-D8PGfxYb.js";import"./useLocalizedStringFormatter-DnY2UHeu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BAx9P39W.js";import"./useFocusRing-IDQhhoIK.js";import"./index-DJ_VatpF.js";import"./index-C5hIZfwH.js";import"./useFormValidation-BQsgNnye.js";import"./useField-DDZqH5hv.js";import"./Button-Czn9lX0K.js";import"./Hidden-B-o_Z7ot.js";import"./useLabels-SIl08feW.js";import"./useButton-MJN3qUWn.js";import"./search-DyJ2snKl.js";import"./createLucideIcon-DO7HuIXt.js";import"./ClearButton-BbQzb-A8.js";import"./x-YUyJRI2G.js";import"./Button-6n3SyLgE.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-BjlGfbr7.js";import"./VisuallyHidden-B1MOHF_-.js";import"./FieldError-D7g57v3N.js";import"./Text-BibBkfuq.js";import"./Text-19RelmEi.js";import"./RSPContexts-BeTSInpY.js";import"./Collection-09IBPkRq.js";import"./index-3kktDTdc.js";import"./DragAndDrop-Dk2yWXgD.js";import"./getScrollParent-C3WNykc8.js";import"./scrollIntoView-DF5-5d4s.js";import"./SelectionIndicator-B7PNH1gU.js";import"./SelectionManager-Dcw7EeBz.js";import"./useEvent-gEY0uIrq.js";import"./useDescription-CAoO2SDf.js";import"./inertValue-DAhGPrD2.js";import"./useHighlightSelectionDescription-B6Y-83OY.js";import"./useUpdateEffect-56KrdJM3.js";import"./ListKeyboardDelegate-zBpsm9mR.js";import"./useHasTabbableChild-C2PxgtPW.js";import"./Checkbox-DxkXM5S5.js";import"./Form-QMfqrVHt.js";import"./check-CmJcoH6o.js";import"./useToggleState-Dg1EUDNI.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {},
  render: function SimpleSearchComponent() {
    const columns: ColumnType[] = [{
      name: 'Frukt',
      id: 'fruit',
      isRowHeader: true
    }, {
      name: 'Beskrivning',
      id: 'description'
    }];
    const [searchTerm, setSearchTerm] = useState('');
    const [mockData] = useState<DataRow[]>(() => fruit.map((item, index) => ({
      id: index + 1,
      fruit: item.name,
      description: item.description
    })));
    const filteredData = mockData.filter(item => item.fruit.toLowerCase().includes(searchTerm.toLowerCase()));
    return <div style={{
      maxWidth: '400px',
      margin: '0 auto'
    }}>
        <SearchField placeholder='Sök efter en frukt...' buttonText='Sök' onSubmit={setSearchTerm} style={{
        width: '100%'
      }} />

        {searchTerm.length > 0 && (filteredData.length === 0 ? <p style={{
        marginTop: '10px'
      }}>Inga träffar</p> : <div style={{
        marginTop: '20px'
      }}>
              <Table aria-label='Fruit Table' style={{
          width: '100%'
        }}>
                <TableHeader>
                  {columns.map(column => <Column key={column.id} isRowHeader={column.isRowHeader ?? false}>
                      {column.name}
                    </Column>)}
                </TableHeader>
                <TableBody>
                  {filteredData.map(item => <Row key={item.id}>
                      {columns.map(column => <Cell key={column.id}>{item[column.id]}</Cell>)}
                    </Row>)}
                </TableBody>
              </Table>
            </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const Te=["SimpleSearch"];export{i as SimpleSearch,Te as __namedExportsOrder,xe as default};
