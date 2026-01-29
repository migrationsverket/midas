import{r as m,f as l,j as t}from"./iframe-BFfxWrax.js";import{S as d}from"./SearchField-DSnZamvl.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DKHZtsOB.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-HqAin-M6.js";import"./utils-C8IykF9r.js";import"./useLocalizedStringFormatter-DvfqzT1M.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DTdlju0_.js";import"./useFocusRing-DxTvBZDR.js";import"./index-DV5X86sq.js";import"./index-CLdRZTnk.js";import"./useFormValidation-GM6fJea0.js";import"./useField-BvLlyQY4.js";import"./Button-C3IeQ2N5.js";import"./Hidden-B6F1QNEg.js";import"./useLabels-DvNW6A8N.js";import"./useButton-BbUUQ9F5.js";import"./search-BmPBv76q.js";import"./createLucideIcon-CbYcBAPq.js";import"./ClearButton-CWuq1-kH.js";import"./Button-C0MNS1vn.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Cg3NQL_5.js";import"./VisuallyHidden-Ca_DY3bR.js";import"./x-w0Zhu9bS.js";import"./FieldError-CzwgIoCO.js";import"./Text-CEYrRu-P.js";import"./Text-Bhj_DbeZ.js";import"./RSPContexts-Bb44GcTO.js";import"./Collection-DldGlNHn.js";import"./index-Dow7YCmP.js";import"./DragAndDrop-BOCI5wST.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Ch46GEFT.js";import"./SelectionManager-BzJ3qBxx.js";import"./useEvent-DtkOHSGp.js";import"./useDescription-DV4u1qz6.js";import"./inertValue-B6-XKVEm.js";import"./useHighlightSelectionDescription-BQhbU0A2.js";import"./useUpdateEffect-BSxpW9SZ.js";import"./ListKeyboardDelegate-B9GXBaZH.js";import"./useHasTabbableChild-D_MU7wse.js";import"./Checkbox-CCM_xjBu.js";import"./Form-DTIVZCo5.js";import"./check-BUzfRBD1.js";import"./useToggleState-ozsGDeAQ.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
