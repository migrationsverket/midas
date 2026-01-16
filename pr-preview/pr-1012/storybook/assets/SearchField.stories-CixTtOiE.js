import{r as m,f as l,j as t}from"./iframe-C-bTQS5b.js";import{S as d}from"./SearchField-DnvW90fx.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-xG65mPf0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-CgqiUiYQ.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-De-wF9dR.js";import"./utils-BN4n3pVV.js";import"./useLocalizedStringFormatter-fekdwmGJ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BejlpbaL.js";import"./useFocusRing-CnEIlzX4.js";import"./index-0H14NhtQ.js";import"./index-Cdo4-yyt.js";import"./useFormValidation-BEi1mUsa.js";import"./useField-DTo9M87M.js";import"./Button-BaZzqN3-.js";import"./Hidden-Cyhjgpq-.js";import"./useLabels-BAE89oEy.js";import"./useButton-DzG_bmRJ.js";import"./search-C4gKCORj.js";import"./createLucideIcon-DAQi76Bv.js";import"./ClearButton-BWohkh75.js";import"./Button-DUHsSslZ.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-C_i8rKrL.js";import"./VisuallyHidden-DRZO2hdA.js";import"./x-CIXfz7i3.js";import"./FieldError-C20ZhlYT.js";import"./Text-Bor6iAR0.js";import"./Text-jh07sOT3.js";import"./RSPContexts-Dzh2LgXf.js";import"./Collection-DJupDp9-.js";import"./index-B-jpAc1r.js";import"./DragAndDrop-Ckce7wkc.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-YJhM_483.js";import"./SelectionManager-PaMbHRLL.js";import"./useEvent-zzI8eDEU.js";import"./useDescription-CP6yOtdD.js";import"./inertValue-DAfLYJCK.js";import"./useHighlightSelectionDescription-BufeKrFK.js";import"./useUpdateEffect-B9anftim.js";import"./ListKeyboardDelegate-CQZdD3fG.js";import"./useHasTabbableChild-CW39IuMI.js";import"./Checkbox-Coa1S0s3.js";import"./Form-DyfKXbQx.js";import"./check-SH_rp_M-.js";import"./useToggleState-CCWqp-k7.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
