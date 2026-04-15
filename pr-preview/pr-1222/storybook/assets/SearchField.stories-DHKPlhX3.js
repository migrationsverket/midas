import{r as m,f as l,j as t}from"./iframe-BQ0rH5Sa.js";import{S as d}from"./SearchField-BW43vrVI.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-D6Xgsog2.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-BbCSG2Ds.js";import"./clsx-B-dksMZM.js";import"./Form-CmjcdI7v.js";import"./useFocusRing-CUcWLsdz.js";import"./index-BRzOPMdu.js";import"./index-B9nWUi91.js";import"./Input-DW5nz6f0.js";import"./Hidden-B903bi5e.js";import"./Button-BWU_U6pL.js";import"./useLabel-G48bLjJ4.js";import"./useLabels-Btdu3CAb.js";import"./useButton-D_NyLkoF.js";import"./FieldError-DF9g5RSV.js";import"./Text-Uu1ScPl1.js";import"./clsx-Ciqy0D92.js";import"./Text-rQ7Pcap6.js";import"./RSPContexts-DXFVYlMo.js";import"./Group-aavVp2ib.js";import"./useControlledState-Bj7Wg3w8.js";import"./useLocalizedStringFormatter-yem2oIc6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-tla-sBga.js";import"./useField-CrN0JmcK.js";import"./TextField.module-DdivwlC8.js";import"./search-wevWY_TN.js";import"./createLucideIcon-CmTdOvE9.js";import"./x-DW52Hs4o.js";import"./useLocalizedStringFormatter-87HHeiEB.js";import"./Button-xgeMudhK.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-PaW3vCB4.js";import"./Collection-DElV5k5j.js";import"./index-BgWuFVSf.js";import"./DragAndDrop-BmBRZb9O.js";import"./getScrollParent-DbuXa8OY.js";import"./scrollIntoView-BZLVH2bl.js";import"./SelectionIndicator-CR-oyooM.js";import"./SelectionManager-DgEIU_G2.js";import"./useEvent-CV3GCwBx.js";import"./useDescription-n70PdxFN.js";import"./inertValue-ClE-4-wr.js";import"./useHighlightSelectionDescription-DlMWssIO.js";import"./useUpdateEffect-Ce28wpaI.js";import"./ListKeyboardDelegate-NXm3dSJr.js";import"./useHasTabbableChild--UC9HmcV.js";import"./Checkbox-q3i5cFms.js";import"./check-CTVrwqq6.js";import"./useToggleState-BgKeYsOt.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
