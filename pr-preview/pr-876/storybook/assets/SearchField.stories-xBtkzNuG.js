import{r as m,f as l,j as t}from"./iframe-QXqfLk9Z.js";import{S as d}from"./SearchField-BEV7dqXo.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BiWNYfQX.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Dggx2A6b.js";import"./clsx-B-dksMZM.js";import"./Form-CvFTFOS9.js";import"./useFocusRing-BiM2zrLV.js";import"./index-C07zKFPd.js";import"./index-C1BcpjW_.js";import"./Input-OMFgtILA.js";import"./Hidden-BI9BX3f7.js";import"./Button-66KmAdCV.js";import"./useLabel-BM1McJfg.js";import"./useLabels-Chfv84nV.js";import"./useButton-CGi5uJBG.js";import"./FieldError-CFf5Jtc5.js";import"./Text-By_cFIOS.js";import"./clsx-Ciqy0D92.js";import"./Text-CFRxdyIy.js";import"./RSPContexts-DJB4f0eu.js";import"./Group-COkufXAs.js";import"./useControlledState-Bn462BK_.js";import"./useLocalizedStringFormatter-BHMdmhnJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-CXinp14V.js";import"./useField-Do9vNT6o.js";import"./TextField.module-DdivwlC8.js";import"./search-BBResTux.js";import"./createLucideIcon-DWZDC5UL.js";import"./x-Bafa4ygD.js";import"./useLocalizedStringFormatter-CnCt5dkn.js";import"./Button-D4lkIHuh.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-CPFiO8Sa.js";import"./Collection-DQcURX3F.js";import"./index-DLrli4PL.js";import"./DragAndDrop-xHZYFcYk.js";import"./getScrollParent-MFR6QYRG.js";import"./scrollIntoView-CjMfEqzR.js";import"./SelectionIndicator-v_veeFNb.js";import"./SelectionManager-6rzd6JLX.js";import"./useEvent-BHqgde0v.js";import"./useDescription-DGDiHLtH.js";import"./inertValue-B2KWbzUj.js";import"./useHighlightSelectionDescription-CO1UL-Cb.js";import"./useUpdateEffect-CvzPZ2Oi.js";import"./ListKeyboardDelegate-BmtFJP2y.js";import"./useHasTabbableChild-xXJehZCD.js";import"./Checkbox-Bb55PMku.js";import"./check-CGP2rmnX.js";import"./useToggleState-B_pT_jfn.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
