import{r as m,f as l,j as t}from"./iframe-CN8uU3WK.js";import{S as d}from"./SearchField-BPticha4.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-n_cAbrmr.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-CZdGWMo4.js";import"./clsx-B-dksMZM.js";import"./Form-CYOLK2lS.js";import"./useFocusRing-CUcvtRrG.js";import"./index-C0vdhhw7.js";import"./index-Cks_K4jE.js";import"./Input-CjR0E-XM.js";import"./Hidden-i_4Qa2VQ.js";import"./Button-BnmvhNcQ.js";import"./useLabel-DgboamvD.js";import"./useLabels-Do1n23m3.js";import"./useButton-DjAvv2ab.js";import"./FieldError-CQyQ10Lj.js";import"./Text-DntZGJ-I.js";import"./clsx-Ciqy0D92.js";import"./Text-DvVr5DU7.js";import"./RSPContexts-FWWfLY0V.js";import"./Group-ya_6Tkk0.js";import"./useControlledState-n2go4XxZ.js";import"./useLocalizedStringFormatter-BM2-R2IO.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BjRoFdzK.js";import"./useField-BPezoI5_.js";import"./TextField.module-DdivwlC8.js";import"./search-ClQ73lXi.js";import"./createLucideIcon-D_RMlAle.js";import"./x-3fndBwRx.js";import"./useLocalizedStringFormatter-C8jrJhCU.js";import"./Button-BVfd33cu.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-D1gwq_r2.js";import"./Collection-ClFv3c_D.js";import"./index-hDLoztzN.js";import"./DragAndDrop-D--2A-on.js";import"./getScrollParent-g_sxJttE.js";import"./scrollIntoView-dW3ZURKy.js";import"./SelectionIndicator-CK6GDs9o.js";import"./SelectionManager-DC7iicly.js";import"./useEvent-B3wdZg5O.js";import"./useDescription-DVfq5zSO.js";import"./inertValue-NegR2VUX.js";import"./useHighlightSelectionDescription-Bad3NclU.js";import"./useUpdateEffect-CqJQgMrO.js";import"./ListKeyboardDelegate-DTVdwrrg.js";import"./useHasTabbableChild-D1DhiJRH.js";import"./Checkbox-CalyXtT4.js";import"./check-TK2Q9all.js";import"./useToggleState-XSN1NGZc.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
