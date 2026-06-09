import{r as m,f as l,j as t}from"./iframe-BKRZxWBZ.js";import{S as d}from"./SearchField-K_v8eo0t.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CbObJf45.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Y4JGSljl.js";import"./clsx-B-dksMZM.js";import"./Form-fTlquUmi.js";import"./useFocusRing-CbgDMaVp.js";import"./index-2JeAuUPI.js";import"./index-B0HfdUG8.js";import"./Input-By6lc-FN.js";import"./Hidden-D261fXZx.js";import"./Button-Bag6HyT1.js";import"./useLabel-BieDJ9AW.js";import"./useLabels-BXP993UL.js";import"./useButton-SiXTvTV2.js";import"./FieldError-DG-tonkS.js";import"./Text-DGzS_SrA.js";import"./clsx-Ciqy0D92.js";import"./Text-8xjuYN6y.js";import"./RSPContexts-BLR_J2o2.js";import"./Group-B955Gz_D.js";import"./useControlledState-C2ay6qCb.js";import"./useLocalizedStringFormatter-CGG1SsZP.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CBLab7Xb.js";import"./useField-CPhZds7-.js";import"./TextField.module-DdivwlC8.js";import"./search-CpKNJr64.js";import"./createLucideIcon-B2GxFjYG.js";import"./x-BTizcETx.js";import"./useLocalizedStringFormatter-gzrdZE98.js";import"./Button-D0aetTqs.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DbkQs6Cg.js";import"./Collection-Dp6UAv6j.js";import"./index-Kq-8Ist-.js";import"./DragAndDrop-aMhwIHG8.js";import"./getScrollParent-5vt1eUdP.js";import"./scrollIntoView-9DVoBKAT.js";import"./SelectionIndicator-DfHJkRwt.js";import"./SelectionManager-DBzFzXpy.js";import"./useEvent-CJgh-wfk.js";import"./useDescription-BeUx0Y0j.js";import"./inertValue-BM86dB9b.js";import"./useHighlightSelectionDescription-D_0_lXVq.js";import"./useUpdateEffect-D3DbWrTB.js";import"./ListKeyboardDelegate-rL3nlI98.js";import"./useHasTabbableChild-Dk9Eivfg.js";import"./Checkbox-0YrGI_86.js";import"./check-UICM5qqQ.js";import"./useToggleState-DcSWHhrE.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
