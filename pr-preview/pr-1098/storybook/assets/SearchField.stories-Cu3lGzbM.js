import{r as m,f as l,j as t}from"./iframe-CvgTjsRI.js";import{S as d}from"./SearchField-BXnCIHv-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BE7TL47a.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DEiVg5eh.js";import"./utils-DsGHCuDD.js";import"./useLocalizedStringFormatter-CrfJ-HgW.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-_v63b735.js";import"./useFocusRing-Bf69ssZP.js";import"./index-BUwV2pti.js";import"./index-CCCX_Q-4.js";import"./useFormValidation-DdFzRzUV.js";import"./useField-CoGIDQmT.js";import"./Button-5hgjL52o.js";import"./Hidden-Bz8_ARKx.js";import"./useLabels-B-EK2xcM.js";import"./useButton-DTqgbWNm.js";import"./search-BB9PlE7m.js";import"./createLucideIcon-Be0qHJux.js";import"./ClearButton-ClVQsAy7.js";import"./x-CVjv4lq5.js";import"./Button-CIHCm98a.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-COXV7AZN.js";import"./VisuallyHidden-DnWZa0YB.js";import"./FieldError-BQ0145L6.js";import"./Text-Bxgne8zr.js";import"./Text-CJZcBszR.js";import"./RSPContexts-B-4MhJIC.js";import"./Collection-Igz2z9uk.js";import"./index-C1zWBa74.js";import"./DragAndDrop-DrmfMM66.js";import"./getScrollParent-3h6gjZ9W.js";import"./scrollIntoView-DKPA2TnM.js";import"./SelectionIndicator-Dk_tpTT1.js";import"./SelectionManager-D4VH4Dg8.js";import"./useEvent-ChWISaFS.js";import"./useDescription-QrPMwBKV.js";import"./inertValue-QOYnnCJV.js";import"./useHighlightSelectionDescription-zIX2uNNG.js";import"./useUpdateEffect-DWWc9gwe.js";import"./ListKeyboardDelegate-BqROKGdH.js";import"./useHasTabbableChild-DJGC6KWo.js";import"./Checkbox-DMEXqFf4.js";import"./Form-CRsJxvyn.js";import"./check-CsQeLH5G.js";import"./useToggleState-Bd11w3nk.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
