import{r as m,f as l,j as t}from"./iframe-DAlGZfQW.js";import{S as d}from"./SearchField-BGY4I2Xd.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Cq4B5eAr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C0mXnx3L.js";import"./clsx-B-dksMZM.js";import"./Form-DSNATSPd.js";import"./useFocusRing-aL1wDNV0.js";import"./index-ZTPDuQtA.js";import"./index-DeUwXnwW.js";import"./Input--HBA1EQM.js";import"./Hidden-o3xiVHpT.js";import"./Button-DEU34lA6.js";import"./useLabel-Bq6n8TDb.js";import"./useLabels-oTyQAigb.js";import"./useButton-DzfauRnx.js";import"./FieldError-CkH1bdUQ.js";import"./Text-LSJ9RRHV.js";import"./clsx-Ciqy0D92.js";import"./Text-BD2SYZAb.js";import"./RSPContexts-ogBeYVaG.js";import"./Group-BzULb40h.js";import"./useControlledState-CvHTtUWm.js";import"./useLocalizedStringFormatter-Db4mYuAv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BdwaRRev.js";import"./useField-BW3jrAKK.js";import"./TextField.module-DdivwlC8.js";import"./search-Bp_vSZ3A.js";import"./createLucideIcon-D-D7lNm8.js";import"./x-4pQMUwmc.js";import"./useLocalizedStringFormatter-Bb6HaDEh.js";import"./Button-xgyBGP3u.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CtB5gR65.js";import"./Collection-DdampRoJ.js";import"./index-Bt3b7xy3.js";import"./DragAndDrop-DW_74-Am.js";import"./getScrollParent-CPI0vVZ2.js";import"./scrollIntoView-DhLsBgUV.js";import"./SelectionIndicator-D-XJWEBG.js";import"./SelectionManager-DJWipqTn.js";import"./useEvent-CF3bDdPT.js";import"./useDescription-7yGeAH-h.js";import"./inertValue-CROlb0j8.js";import"./useHighlightSelectionDescription-DR5tayqx.js";import"./useUpdateEffect-YgxQwquL.js";import"./ListKeyboardDelegate-2D-TSKOA.js";import"./useHasTabbableChild-DVW2HaS2.js";import"./Checkbox-QpN8ctcU.js";import"./check-B19l-unv.js";import"./useToggleState-BJH-wfzk.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
