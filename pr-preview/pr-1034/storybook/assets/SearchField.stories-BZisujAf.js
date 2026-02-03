import{r as m,f as l,j as t}from"./iframe-LxsxPn7f.js";import{S as d}from"./SearchField-Cn36QQIj.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BpiTemPE.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-nLdn7Lta.js";import"./utils-DncIGQMF.js";import"./useLocalizedStringFormatter-ot1i9Cu6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-D0Rs9JFg.js";import"./useFocusRing-B93HZZsG.js";import"./index-CKuG6hKg.js";import"./index-kVjvdCiN.js";import"./useFormValidation-CHttf5zF.js";import"./useField-Ymsb_LQZ.js";import"./Button-ghTKDsBY.js";import"./Hidden-B-JeMypd.js";import"./useLabels-CVG2mcXN.js";import"./useButton-BtIaMTZK.js";import"./search-CGuMICsd.js";import"./createLucideIcon-BNlGPqho.js";import"./ClearButton-C6tYdSyW.js";import"./Button-CEFhP8SH.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-ImfIeIeT.js";import"./VisuallyHidden-qYkk6-oE.js";import"./x-D7SDEcH0.js";import"./FieldError-CgEYF0Jb.js";import"./Text-PejApv0F.js";import"./Text-olPUrwWm.js";import"./RSPContexts-DIHhpxyH.js";import"./Collection-ncjdmfvR.js";import"./index-BcaQ0XzI.js";import"./DragAndDrop-BtdHxcLo.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Bmwsxbdo.js";import"./SelectionManager-s3BepUef.js";import"./useEvent-Rt9gRg-L.js";import"./useDescription-DziSmAEk.js";import"./inertValue-DtmCE-EQ.js";import"./useHighlightSelectionDescription-CU9JzWdM.js";import"./useUpdateEffect-Df1KERM5.js";import"./ListKeyboardDelegate-BHqe-oE5.js";import"./useHasTabbableChild-CbZS_DcF.js";import"./Checkbox-BMc-T11s.js";import"./Form-DdmoYPXP.js";import"./check-Cqtyx_aa.js";import"./useToggleState-DRfO9vKp.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
