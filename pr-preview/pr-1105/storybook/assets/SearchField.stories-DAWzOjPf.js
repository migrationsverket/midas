import{r as m,f as l,j as t}from"./iframe-B5zOBWL8.js";import{S as d}from"./SearchField-CBek92yn.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DMXhB4OX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-eNYL6jem.js";import"./clsx-B-dksMZM.js";import"./Form-IH-oloZ9.js";import"./useFocusRing-BLNWzzDa.js";import"./index-BUSmP6HV.js";import"./index-DCfNYjYD.js";import"./Input-BjbrFPx3.js";import"./Hidden-BfTCrLpu.js";import"./Button-Cr4v4jCk.js";import"./useLabels-BojerJy7.js";import"./useButton-BuCB7CsM.js";import"./FieldError-C872MoeY.js";import"./Text-CneoSpSV.js";import"./clsx-Ciqy0D92.js";import"./Text-2qPPhaNY.js";import"./RSPContexts-DY0llAGa.js";import"./Group-CCcIm9uk.js";import"./useControlledState-GuUpKA2D.js";import"./useLocalizedStringFormatter-Cgkn5RBi.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CgzBZI_s.js";import"./useField-RVLo8JgM.js";import"./TextField.module-DdivwlC8.js";import"./search-BW3e3oip.js";import"./createLucideIcon-BVioREcM.js";import"./x-BaI04LZc.js";import"./useLocalizedStringFormatter-C9omsTZd.js";import"./Button-Ctf6p_Bv.js";import"./Button.module-D_C6WeTN.js";import"./VisuallyHidden-BwEmyPT5.js";import"./Collection-CPa-JUly.js";import"./index-DTZHqRxA.js";import"./DragAndDrop-CM1hWrty.js";import"./getScrollParent-DhsKx92u.js";import"./scrollIntoView-DWtQnOyb.js";import"./SelectionIndicator-CSf-4huf.js";import"./SelectionManager-Bb4M-VHn.js";import"./useEvent-CkQwjY1M.js";import"./useDescription-Cf4XGtE7.js";import"./inertValue-Cgi1a1lY.js";import"./useHighlightSelectionDescription-DaSdW-8k.js";import"./useUpdateEffect-CaQUSCEL.js";import"./ListKeyboardDelegate-CyqzOeGx.js";import"./useHasTabbableChild-x4JOm51E.js";import"./Checkbox-DHxmTUsF.js";import"./check-CymmT4RF.js";import"./useToggleState-xJt6SaQb.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
