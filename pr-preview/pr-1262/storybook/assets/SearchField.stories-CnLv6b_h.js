import{r as m,f as l,j as t}from"./iframe-BJBIw5Cq.js";import{S as d}from"./SearchField-D99EaiNN.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CP28WNNc.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Do0BAiOq.js";import"./clsx-B-dksMZM.js";import"./Form-8WGnfsre.js";import"./useFocusRing-6yeL08Aa.js";import"./index-BWG0al_j.js";import"./index-C6qgraqq.js";import"./Input-CFMMVIkJ.js";import"./Hidden-CNTBl7tD.js";import"./Button-KImsPJcr.js";import"./useLabel-D1yIUKnX.js";import"./useLabels-CYs1MfMV.js";import"./useButton-DvDYy4Od.js";import"./FieldError-CrniQlrG.js";import"./Text-CMOpEkqD.js";import"./clsx-Ciqy0D92.js";import"./Text-DqMXqkzU.js";import"./RSPContexts-C-cLQ1LZ.js";import"./Group-C3VIbfPL.js";import"./useControlledState-BjWINJro.js";import"./useLocalizedStringFormatter-Di4p2xx_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-COSExJEr.js";import"./useField-CuEvS5HD.js";import"./TextField.module-DdivwlC8.js";import"./search-CGfwKqJJ.js";import"./createLucideIcon-c6giaxW9.js";import"./x-C5JlSWIl.js";import"./useLocalizedStringFormatter-Dv9eZvrq.js";import"./Button-DIUVHLbR.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DIaZA2Ke.js";import"./Collection-BENs51ky.js";import"./index-D09pUEBs.js";import"./DragAndDrop-B0xOsE4V.js";import"./getScrollParent-52puNM91.js";import"./scrollIntoView-Y4Xyrix4.js";import"./SelectionIndicator-DIjfsadz.js";import"./SelectionManager-B_FZe_ff.js";import"./useEvent-B8uiyVUy.js";import"./useDescription-8I1puxrW.js";import"./inertValue-DPjKaa-V.js";import"./useHighlightSelectionDescription-DNzRFIJy.js";import"./useUpdateEffect-Cso8x3si.js";import"./ListKeyboardDelegate-C6b1SyrD.js";import"./useHasTabbableChild-HxUN-CvK.js";import"./Checkbox-sM1eLXGB.js";import"./check-BUtOe2xx.js";import"./useToggleState-YAxkeh-D.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
