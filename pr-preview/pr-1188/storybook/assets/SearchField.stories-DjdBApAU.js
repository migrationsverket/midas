import{r as m,f as l,j as t}from"./iframe-BhCsjan0.js";import{S as d}from"./SearchField-CYPjf3yY.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BzsPMBOo.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CtrZbhzi.js";import"./clsx-B-dksMZM.js";import"./Form-rvJLQRoR.js";import"./useFocusRing-Ws2f8SLu.js";import"./index-DDDUdMNC.js";import"./index-D_WqKMc5.js";import"./Input-DGZJAsbZ.js";import"./Hidden-D6UeEvFM.js";import"./Button-C2NaQWvO.js";import"./useLabel-B7TVwUpE.js";import"./useLabels-BLj4vdHd.js";import"./useButton-By7DbLK9.js";import"./FieldError-d9D7STve.js";import"./Text-DhUSBMS-.js";import"./clsx-Ciqy0D92.js";import"./Text-CFjsaxmQ.js";import"./RSPContexts-CrHrywo6.js";import"./Group-C95TnjTD.js";import"./useControlledState-CoCU8B0S.js";import"./useLocalizedStringFormatter-DQmyBNjM.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bkbtnl5J.js";import"./useField-Cfm5ic33.js";import"./TextField.module-DdivwlC8.js";import"./search-Bs-OTsil.js";import"./createLucideIcon-Bp2jaLbZ.js";import"./x-DuKAZAyJ.js";import"./useLocalizedStringFormatter-K5Z3y1WJ.js";import"./Button-1iG7gZrx.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CfUMAOQ3.js";import"./Collection-DM4I3Ztv.js";import"./index-CoQv-Sjc.js";import"./DragAndDrop-CxwSq2S0.js";import"./getScrollParent-NPr2J27f.js";import"./scrollIntoView-DYsCjaxp.js";import"./SelectionIndicator-1Pn5e84b.js";import"./SelectionManager-CNKK__7r.js";import"./useEvent-DNglUoLW.js";import"./useDescription-B1CS-p0E.js";import"./inertValue-DlHYxREq.js";import"./useHighlightSelectionDescription-BzAmOK_Y.js";import"./useUpdateEffect-BJZ2giNx.js";import"./ListKeyboardDelegate-BBCtkR3X.js";import"./useHasTabbableChild-BY8KoP1h.js";import"./Checkbox-COx58OqZ.js";import"./check-B2ujJPxQ.js";import"./useToggleState-D50vjHgf.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
