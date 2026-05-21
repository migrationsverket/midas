import{r as m,f as l,j as t}from"./iframe-CU6IyPdi.js";import{S as d}from"./SearchField-CgPlUeih.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-B1vV60GC.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-C3EuF5tN.js";import"./clsx-B-dksMZM.js";import"./Form-D7KVHFov.js";import"./useFocusRing-CgN0-97j.js";import"./index-CWwAu-UJ.js";import"./index-EaiVYzVz.js";import"./Input-Bj5zRvQB.js";import"./Hidden-BMh1hBMj.js";import"./Button-Dn__6SVC.js";import"./useLabel-Bt0836mW.js";import"./useLabels-Di0VtbU1.js";import"./useButton-YhY6a0OA.js";import"./FieldError-CwoMpyv7.js";import"./Text-DjY_AY4u.js";import"./clsx-Ciqy0D92.js";import"./Text-DiW7fUXy.js";import"./RSPContexts-C8L0Tday.js";import"./Group-fabNRkLN.js";import"./useControlledState-DnKqpd9E.js";import"./useLocalizedStringFormatter-CCIw-1cs.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DUbvCcvT.js";import"./useField-C6IBffWw.js";import"./TextField.module-DdivwlC8.js";import"./search-GS58OqAl.js";import"./createLucideIcon-BhPQSJHM.js";import"./x-DvEBYFLx.js";import"./useLocalizedStringFormatter-D1ier4wV.js";import"./Button-DzjFo675.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-Bl6sgZVR.js";import"./Collection-DuVcoonJ.js";import"./index-BLTV2BVr.js";import"./DragAndDrop-BSOUr3k2.js";import"./getScrollParent-DPGj-_74.js";import"./scrollIntoView-CBeKWyA3.js";import"./SelectionIndicator-Aj5ctdzm.js";import"./SelectionManager-mV4APRA7.js";import"./useEvent-CbNpr6qP.js";import"./useDescription-C14Mmfay.js";import"./inertValue-B4Hw6XAQ.js";import"./useHighlightSelectionDescription-Bwd4Is4n.js";import"./useUpdateEffect-DQXzh7Ev.js";import"./ListKeyboardDelegate-IB4zQhb7.js";import"./useHasTabbableChild-5F-c6nNd.js";import"./Checkbox-Q3ea84Gk.js";import"./check-BeN1TX1f.js";import"./useToggleState-Urj3AfHd.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
