import{r as m,f as l,j as t}from"./iframe-D8kScJOW.js";import{S as d}from"./SearchField-BOBN49F4.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BbSFwmwH.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-CfPp4VwR.js";import"./utils-DOIpWP0z.js";import"./useLocalizedStringFormatter-yHRbMNWv.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-tBSUgwkE.js";import"./useFocusRing-DX0NOpMY.js";import"./index-BwG7EFX-.js";import"./index-DoG9K020.js";import"./useFormValidation-mZ0GSkOf.js";import"./useField-DdbhNNnT.js";import"./Button-Calv3qt8.js";import"./Hidden-DrIa5vju.js";import"./useLabels-CiWc5UlF.js";import"./useButton-CsXDdlLu.js";import"./search-CKr6Avj9.js";import"./createLucideIcon-D86DfHIr.js";import"./ClearButton-Ce_Mmhca.js";import"./Button-yGMt3EcI.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CnhkruPy.js";import"./VisuallyHidden-CmWP6aGN.js";import"./x-gesZXF53.js";import"./FieldError-BGTGmZtQ.js";import"./Text-C9haNyBE.js";import"./Text-dfzJJw2x.js";import"./RSPContexts-gcY93-hk.js";import"./Collection-BRKsVRuR.js";import"./index-BTX46W9Q.js";import"./DragAndDrop-CLvLSbsK.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-Fg0uBFlh.js";import"./SelectionManager-cqgo4LjN.js";import"./useEvent-CoP0H9dt.js";import"./useDescription-B5GMnvdp.js";import"./inertValue-BvdQamXw.js";import"./useHighlightSelectionDescription-CWbYR1rF.js";import"./useUpdateEffect-B9ZNlywb.js";import"./ListKeyboardDelegate-h55wbdAx.js";import"./useHasTabbableChild-Cjv0AuGS.js";import"./Checkbox-CzKaCAqq.js";import"./Form-SqAUoaNm.js";import"./check-CM05xaVE.js";import"./useToggleState-Bs_egr50.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
