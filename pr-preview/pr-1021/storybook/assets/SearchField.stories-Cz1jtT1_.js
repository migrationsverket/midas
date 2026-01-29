import{r as m,f as l,j as t}from"./iframe-CRizNrQm.js";import{S as d}from"./SearchField-DMdMDHQd.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DrLaK11V.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BE4ES4tB.js";import"./utils-K8G9J7j3.js";import"./useLocalizedStringFormatter-e4SpOeO9.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DMjYFmDq.js";import"./useFocusRing-DbEG3syD.js";import"./index-BLxVqi3w.js";import"./index-U_5gcQv1.js";import"./useFormValidation-D9K4R1_5.js";import"./useField-BxlqX-oM.js";import"./Button-B_2FCxCF.js";import"./Hidden-BVxPU0E9.js";import"./useLabels-DaIxsHkM.js";import"./useButton-C-avZcWZ.js";import"./search-C6oTLzeN.js";import"./createLucideIcon-B6uSx5I0.js";import"./ClearButton-D6idqCl4.js";import"./Button-BfSqLmBa.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BUb6pTdq.js";import"./VisuallyHidden-CSY-auv0.js";import"./x-B4wlmJ4S.js";import"./FieldError-D2PjhZcF.js";import"./Text-DMcqYI8P.js";import"./Text-BVUreVA5.js";import"./RSPContexts-CN45OwZB.js";import"./Collection-BP_hPNSj.js";import"./index-CubTc-Vn.js";import"./DragAndDrop-BUzvJIHk.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-RCQ_aLXk.js";import"./SelectionManager-DCOVGJOt.js";import"./useEvent-DR2hB797.js";import"./useDescription-Cy2gNtMJ.js";import"./inertValue-D04jXbj5.js";import"./useHighlightSelectionDescription-C6PQjUeu.js";import"./useUpdateEffect-BK1JoaRv.js";import"./ListKeyboardDelegate-C6qAstel.js";import"./useHasTabbableChild--xC1vtST.js";import"./Checkbox-BdUIUqR8.js";import"./Form-Bi2fHGRN.js";import"./check-DDutmDkN.js";import"./useToggleState-BIWAmMSj.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
