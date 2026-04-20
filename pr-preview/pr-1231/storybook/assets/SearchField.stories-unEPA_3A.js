import{r as m,f as l,j as t}from"./iframe-DHMeiSea.js";import{S as d}from"./SearchField-D-_lUdMu.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DGYvwt7O.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C4sbwA05.js";import"./clsx-B-dksMZM.js";import"./Form-BA5p4_Pr.js";import"./useFocusRing-BZqNlBLL.js";import"./index-DUWIsA9S.js";import"./index-CO65HGaQ.js";import"./Input-f9ifWMLK.js";import"./Hidden-BDTDIVWX.js";import"./Button-X7Yqj24b.js";import"./useLabel-C9k7s1Sm.js";import"./useLabels-66mig2cx.js";import"./useButton-RAYxeWyl.js";import"./FieldError-lPOYj5uT.js";import"./Text-BM4AoGMt.js";import"./clsx-Ciqy0D92.js";import"./Text-OJU2i65y.js";import"./RSPContexts-BSo_BzMb.js";import"./Group-D0pRYruO.js";import"./useControlledState-CMV_FSB4.js";import"./useLocalizedStringFormatter-C8QLbDFe.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-3cQ0mlc5.js";import"./useField-DM8ENoK0.js";import"./TextField.module-DdivwlC8.js";import"./search-CTzFn2zU.js";import"./createLucideIcon-DHfZe-cT.js";import"./x-C9bWyskH.js";import"./useLocalizedStringFormatter-B2muSTfc.js";import"./Button-DRj-uv9d.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-V6Y_A8T3.js";import"./Collection-B5CYATRa.js";import"./index-CyT7ybeZ.js";import"./DragAndDrop-LOFF9F86.js";import"./getScrollParent-DqcIICEx.js";import"./scrollIntoView-CXJd081A.js";import"./SelectionIndicator-D6PB-Vso.js";import"./SelectionManager-qRhNxfSP.js";import"./useEvent-lEqisOMe.js";import"./useDescription-D2PosSZ6.js";import"./inertValue-CCpIiRRt.js";import"./useHighlightSelectionDescription-D560zI-9.js";import"./useUpdateEffect-BU2k-Oau.js";import"./ListKeyboardDelegate-DrOjYDNI.js";import"./useHasTabbableChild-BVbSPOhb.js";import"./Checkbox-kagJyTLV.js";import"./check-DVj13SaZ.js";import"./useToggleState-C90nGXgz.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
