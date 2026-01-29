import{r as m,f as l,j as t}from"./iframe-3vXkeaXf.js";import{S as d}from"./SearchField-Cx4TgSsi.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BbGVHjHJ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BqfUWkUs.js";import"./utils-Ci2rW9QR.js";import"./useLocalizedStringFormatter-Lx5W0ILu.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-awxZU8Rd.js";import"./useFocusRing-DNafsx48.js";import"./index-CZo5RHNF.js";import"./index-DodIUsUi.js";import"./useFormValidation-zcqsPAxn.js";import"./useField-D9Vx8qL5.js";import"./Button-Dhwcp2Tj.js";import"./Hidden-If5Crsfr.js";import"./useLabels-D1__96MT.js";import"./useButton-CIQe5U3d.js";import"./search-BjH6VsFf.js";import"./createLucideIcon-Dr81SgBw.js";import"./ClearButton-zDqENnnT.js";import"./Button-CqTfhLBS.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-Bnn512eF.js";import"./VisuallyHidden-Dmqfs6c2.js";import"./x-YaSecB4y.js";import"./FieldError-CUFcw2Bx.js";import"./Text-BHe6HkmH.js";import"./Text-faRT9Ypk.js";import"./RSPContexts-CALLQvPo.js";import"./Collection-CroRJ_z_.js";import"./index-BIpjrxpZ.js";import"./DragAndDrop-DPcuUUQx.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BmK6g95b.js";import"./SelectionManager-B9H37USF.js";import"./useEvent-Dtk_oGRL.js";import"./useDescription-SJAzHkl8.js";import"./inertValue-Cy5yqUgb.js";import"./useHighlightSelectionDescription-BFpKb7JK.js";import"./useUpdateEffect-C1OlrAvX.js";import"./ListKeyboardDelegate-DjXlbXio.js";import"./useHasTabbableChild-CFTkKE8P.js";import"./Checkbox-CnU1m10H.js";import"./Form-Cn_bxQUe.js";import"./check-BbgmuBYL.js";import"./useToggleState-CLlJvVPk.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
