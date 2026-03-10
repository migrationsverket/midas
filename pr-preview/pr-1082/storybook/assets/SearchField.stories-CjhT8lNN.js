import{r as m,f as l,j as t}from"./iframe-J_Foy-cM.js";import{S as d}from"./SearchField-DCXS3X97.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dn8AdClP.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-B1mfCV74.js";import"./utils-Dz1rr240.js";import"./useLocalizedStringFormatter-DAYyyi0u.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-ylnOYFcB.js";import"./useFocusRing-rlJVVM4v.js";import"./index-8a3cgiya.js";import"./index-Dd4zAF9f.js";import"./useFormValidation-mgIONitn.js";import"./useField-TIH1oN4J.js";import"./Button-BeN6WMHV.js";import"./Hidden-DnHm9fUz.js";import"./useLabels-h3ysYapG.js";import"./useButton-CCCZVmzr.js";import"./search-Buwd_p5T.js";import"./createLucideIcon-DHjkRA8X.js";import"./ClearButton-C0cN8Sp0.js";import"./Button-CvAdTJVn.js";import"./Button.module-7yYQGR8l.js";import"./useLocalizedStringFormatter-BMhhJAIV.js";import"./VisuallyHidden-JprstTB-.js";import"./x-DTQvMQic.js";import"./FieldError-9aGj8mXQ.js";import"./Text-BHSQSgTv.js";import"./Text-D0IbAA02.js";import"./RSPContexts-BVCTgtQm.js";import"./Collection-BfxZDf5Q.js";import"./index-kYrM287H.js";import"./DragAndDrop-iY_Z187d.js";import"./getScrollParent-Ck9-RDvg.js";import"./scrollIntoView-Cjql2oy1.js";import"./SelectionIndicator-Dp5up_Gk.js";import"./SelectionManager-Ca3L2vva.js";import"./useEvent-eqWhS--f.js";import"./useDescription-1dltK9bV.js";import"./inertValue-BkMIBA-b.js";import"./useHighlightSelectionDescription-CPnb4Z-B.js";import"./useUpdateEffect-CW9a05Kk.js";import"./ListKeyboardDelegate-k-1ZDdUB.js";import"./useHasTabbableChild-DOSk_MtV.js";import"./Checkbox-DbEXxp46.js";import"./Form-JzMORks9.js";import"./check-CcC6wvjo.js";import"./useToggleState-Dwo1TRtr.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
