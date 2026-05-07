import{r as m,f as l,j as t}from"./iframe-CARYWlMr.js";import{S as d}from"./SearchField-yz21nBhD.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BuZlyTId.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CpzDmsYi.js";import"./clsx-B-dksMZM.js";import"./Form-MW-kx8SJ.js";import"./useFocusRing-eR43gCGN.js";import"./index-D4HHjk07.js";import"./index-DCEAqPJW.js";import"./Input-B_h6sSj8.js";import"./Hidden-eR-QFzh5.js";import"./Button-Czff7WUO.js";import"./useLabel-BqT-6tGp.js";import"./useLabels-D9vbRTn9.js";import"./useButton-pxShH704.js";import"./FieldError-D96zTf6J.js";import"./Text-CYKeiFr8.js";import"./clsx-Ciqy0D92.js";import"./Text-C6YZuIwj.js";import"./RSPContexts-DmmT8ORw.js";import"./Group-D4_10SET.js";import"./useControlledState-PiJ1bWKV.js";import"./useLocalizedStringFormatter-BapB3aBW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-c7e20TCM.js";import"./useField-DA0e3gVp.js";import"./TextField.module-DdivwlC8.js";import"./search-C9Y51uQI.js";import"./createLucideIcon-DMrxxS3N.js";import"./x-D6m6mvyo.js";import"./useLocalizedStringFormatter-iKS83_lA.js";import"./Button-CJO8gD-9.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BdHdXLzS.js";import"./Collection-B-bw2hee.js";import"./index-Bf80HzPL.js";import"./DragAndDrop-CTYNPxhr.js";import"./getScrollParent-B2bQFjre.js";import"./scrollIntoView-BlJ4PC4n.js";import"./SelectionIndicator-yiNruNt6.js";import"./SelectionManager-swas-xle.js";import"./useEvent-CdMdGV8r.js";import"./useDescription-1em3p3rE.js";import"./inertValue-DX6Q-5fI.js";import"./useHighlightSelectionDescription-DD-ZWijv.js";import"./useUpdateEffect-C0xfKOay.js";import"./ListKeyboardDelegate-BXuWIdHq.js";import"./useHasTabbableChild-CChl7vkG.js";import"./Checkbox-CXTQFZGv.js";import"./check-CESeAlGN.js";import"./useToggleState-I2VmkKZ0.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
