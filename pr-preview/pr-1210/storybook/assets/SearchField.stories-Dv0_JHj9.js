import{r as m,f as l,j as t}from"./iframe-Br4UFWDA.js";import{S as d}from"./SearchField-B-9RJ1_a.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CHeAUBoH.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Bfs2iwu7.js";import"./clsx-B-dksMZM.js";import"./Form-CWMb433o.js";import"./useFocusRing-DmF-1uRF.js";import"./index-B5OjJHm8.js";import"./index-BLvyQ4Zy.js";import"./Input-lThwDmnZ.js";import"./Hidden-B2UqZyG9.js";import"./Button-DiwUVhQg.js";import"./useLabel-PuL03Jmv.js";import"./useLabels-CD31_qda.js";import"./useButton-BuJxASXi.js";import"./FieldError-ClRId_ZV.js";import"./Text-DBKCtpuc.js";import"./clsx-Ciqy0D92.js";import"./Text-C3N7Tmxi.js";import"./RSPContexts-BSDVlP-T.js";import"./Group-DsZ3dfjF.js";import"./useControlledState-t0OgLn8n.js";import"./useLocalizedStringFormatter-BYNBY8Ij.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DKqNJEUK.js";import"./useField-CFxXU3Kh.js";import"./TextField.module-DdivwlC8.js";import"./search-Baj1-MXW.js";import"./createLucideIcon-CSxAjQ3c.js";import"./x-BCbyNW7r.js";import"./useLocalizedStringFormatter-B9cG3ozx.js";import"./Button-B62uNfEE.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-BnWQuQpu.js";import"./Collection-CwrKcnQr.js";import"./index-ZbV3ddxo.js";import"./DragAndDrop-ojySjvK3.js";import"./getScrollParent-BvBLI2ok.js";import"./scrollIntoView-Imy71PHr.js";import"./SelectionIndicator-0Hsw6Cjh.js";import"./SelectionManager-cYfE24op.js";import"./useEvent-CVcdG4ON.js";import"./useDescription-DN-UTWji.js";import"./inertValue-BFAL0llj.js";import"./useHighlightSelectionDescription-B_VWWgI5.js";import"./useUpdateEffect-CWon9Dr4.js";import"./ListKeyboardDelegate-D2VxwZ3S.js";import"./useHasTabbableChild-BpCWxuPc.js";import"./Checkbox-BOzD4MTa.js";import"./check-C3oTWyCe.js";import"./useToggleState-D53W-noN.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
