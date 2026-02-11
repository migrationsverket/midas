import{r as m,f as l,j as t}from"./iframe-CVh3nSma.js";import{S as d}from"./SearchField-BYXd47Yi.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DH8FwHDE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Cgai1Xo4.js";import"./utils-DAl4r7ZI.js";import"./useLocalizedStringFormatter-CIu9Ev8Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-C7Da0rb3.js";import"./useFocusRing-DevKcWYf.js";import"./index-DZnEqQgx.js";import"./index-Cw_mWNji.js";import"./useFormValidation-B1wWlh02.js";import"./useField-2EgC1qtj.js";import"./Button-CjHZLp4M.js";import"./Hidden-CKFlO9gT.js";import"./useLabels-BlYxGBYn.js";import"./useButton-Cv89nSdu.js";import"./search-DpPi9CxX.js";import"./createLucideIcon-DiDsoOCy.js";import"./ClearButton-DFGKcfvi.js";import"./Button-CBEr-IVd.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DsUDPIO8.js";import"./VisuallyHidden-8g-Kxj9j.js";import"./x-B6y8n7rP.js";import"./FieldError-DrvXZ_4S.js";import"./Text-BmDZHzTH.js";import"./Text-D6VK4Tm3.js";import"./RSPContexts-BTXC2TF-.js";import"./Collection-BJu2ybUs.js";import"./index-BwGuzPfC.js";import"./DragAndDrop-DxwW22tU.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CN5UGb_C.js";import"./SelectionManager-CKXVu5xB.js";import"./useEvent-BeLY2gpF.js";import"./useDescription-Lg2ymasT.js";import"./inertValue-CaDZVMzj.js";import"./useHighlightSelectionDescription-CleTC6D-.js";import"./useUpdateEffect-PVvS_7va.js";import"./ListKeyboardDelegate-CCOJkWMX.js";import"./useHasTabbableChild-XRu1mCQC.js";import"./Checkbox-CCTVpwCJ.js";import"./Form-VdedL44P.js";import"./check-ZzSV_4jX.js";import"./useToggleState-Duj060PO.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
