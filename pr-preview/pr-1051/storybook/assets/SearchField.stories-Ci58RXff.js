import{r as m,f as l,j as t}from"./iframe-DZ1EsSEK.js";import{S as d}from"./SearchField-CMXyFact.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CpjhzDda.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-lK9T8_jl.js";import"./clsx-B-dksMZM.js";import"./Form-Uz8HRtXw.js";import"./useFocusRing-D_vCbsr-.js";import"./index-71P1Szw3.js";import"./index-BQnaZYa2.js";import"./Input-CUDeexPh.js";import"./Hidden-Ds6hIAxc.js";import"./Button-ZOWpVm8T.js";import"./useLabels-D4tzMtOA.js";import"./useButton-c1Yevao-.js";import"./FieldError-BzMgxN1Q.js";import"./Text-DZdpfwqx.js";import"./clsx-Ciqy0D92.js";import"./Text-DqGoi7_4.js";import"./RSPContexts-BoDURVtR.js";import"./Group-CXVlAMhZ.js";import"./useControlledState-CfPDeg3b.js";import"./useLocalizedStringFormatter-D4af7QR2.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-B9qE1ySm.js";import"./useField-BW5TjY1c.js";import"./TextField.module-DdivwlC8.js";import"./search-D6z4OQ0x.js";import"./createLucideIcon-CHs8jxVv.js";import"./x-CqUvAfPO.js";import"./useLocalizedStringFormatter-CXoae_qU.js";import"./Button-BU-tH8i8.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DVsJMowt.js";import"./Collection-D-oaO6og.js";import"./index-Tron79TB.js";import"./DragAndDrop-C6AbXiwp.js";import"./getScrollParent-zITgOpZ8.js";import"./scrollIntoView-CULTOlwa.js";import"./SelectionIndicator-DOlDYJIj.js";import"./SelectionManager-CIztqYLV.js";import"./useEvent-BIB_rKuR.js";import"./useDescription-XzJJ2X8U.js";import"./inertValue-BiBXl6Ga.js";import"./useHighlightSelectionDescription-fVVatTIf.js";import"./useUpdateEffect-BcvBEx6J.js";import"./ListKeyboardDelegate-DZNAPElA.js";import"./useHasTabbableChild-DQAnh7S4.js";import"./Checkbox-DFD3jj6R.js";import"./check-BtVDuzOH.js";import"./useToggleState-CE1N3d08.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
