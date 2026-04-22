import{r as m,f as l,j as t}from"./iframe-xMXigoWy.js";import{S as d}from"./SearchField-DtmO0tqv.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CQGWgCqk.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-YGWrB3Vf.js";import"./clsx-B-dksMZM.js";import"./Form-eqNz80uk.js";import"./useFocusRing-DfQ0yX8G.js";import"./index-BSZ5eAzw.js";import"./index-DHIIVQ80.js";import"./Input-B4tTYQrT.js";import"./Hidden-DphnPAPv.js";import"./Button-BdNSmPg8.js";import"./useLabel-CBmnmGxA.js";import"./useLabels-BLdk5JBQ.js";import"./useButton-Bw607H0U.js";import"./FieldError-C88gPFQS.js";import"./Text-D19M6ZHM.js";import"./clsx-Ciqy0D92.js";import"./Text-CdJ1E4Uo.js";import"./RSPContexts-Catmt_xa.js";import"./Group-Ds0Tuj8b.js";import"./useControlledState-CfBsYb3v.js";import"./useLocalizedStringFormatter-BNd9Pi1_.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-MDQxft5x.js";import"./useField-C_OQM8it.js";import"./TextField.module-DdivwlC8.js";import"./search-tiP8rbAQ.js";import"./createLucideIcon-DEQfBkzv.js";import"./x-B6O-7LlT.js";import"./useLocalizedStringFormatter-DsDwc5ZW.js";import"./Button-taOyTeEm.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-DvauRNh_.js";import"./Collection-DQcujv6N.js";import"./index-Mj0R0bVi.js";import"./DragAndDrop-Dp0MtNyY.js";import"./getScrollParent-BkLWx8Cv.js";import"./scrollIntoView-D_jASrqn.js";import"./SelectionIndicator-D4caVTdl.js";import"./SelectionManager-XtoX7aPQ.js";import"./useEvent-BRIuB0Gk.js";import"./useDescription-BDm6qKhu.js";import"./inertValue-CDQQ2s_4.js";import"./useHighlightSelectionDescription-FX7F2myL.js";import"./useUpdateEffect-DNdQzrtZ.js";import"./ListKeyboardDelegate-aHfey2wc.js";import"./useHasTabbableChild-CzykSALY.js";import"./Checkbox-DnELd58d.js";import"./check-BxRg-QqL.js";import"./useToggleState-CdWIeB-l.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
