import{r as m,f as l,j as t}from"./iframe-DJnBo8qx.js";import{S as d}from"./SearchField-Bl-jQWV5.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dk-osPCG.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-gWiD0ns3.js";import"./clsx-B-dksMZM.js";import"./Form-Bm_BfevM.js";import"./useFocusRing-Bp7BshOu.js";import"./index-DrJKcisO.js";import"./index-BBWpXqfQ.js";import"./Input-CJ2SSYHL.js";import"./Hidden-DalgADPi.js";import"./Button-DeGMYH9f.js";import"./useLabel-CQ_H6yZ6.js";import"./useLabels-CCJcnJYo.js";import"./useButton-CF9JOIlT.js";import"./FieldError-C3hrQaHN.js";import"./Text-C5-sBZVY.js";import"./clsx-Ciqy0D92.js";import"./Text-CwlODUSS.js";import"./RSPContexts-QhaJtN54.js";import"./Group-BQbxhg7e.js";import"./useControlledState-DGw5Me1h.js";import"./useLocalizedStringFormatter-CZN4d7Nk.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-COYMWqIJ.js";import"./useField-Qw0L00q1.js";import"./TextField.module-DdivwlC8.js";import"./search-D38ZICNP.js";import"./createLucideIcon-mT6cpvLo.js";import"./x-DoHdhEkA.js";import"./useLocalizedStringFormatter-DDDranTe.js";import"./Button-DxRtiFp7.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-XMqtKg57.js";import"./Collection-Cyi4sj4g.js";import"./index-CDN3X01D.js";import"./DragAndDrop-DGvhY6Dj.js";import"./getScrollParent-BBgGqXJk.js";import"./scrollIntoView-CmRBaB-g.js";import"./SelectionIndicator-bVow53O0.js";import"./SelectionManager-Cz5XDWSZ.js";import"./useEvent-BgibXCRa.js";import"./useDescription-CfwfTgOd.js";import"./inertValue-CXBKVdn2.js";import"./useHighlightSelectionDescription-BYIEAd_l.js";import"./useUpdateEffect-Ba0_eIG8.js";import"./ListKeyboardDelegate-BScgO_Ta.js";import"./useHasTabbableChild-DyAbfK-v.js";import"./Checkbox-CqBol1MN.js";import"./check-wJtMB9W2.js";import"./useToggleState-BCJxX3AZ.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
