import{r as m,f as l,j as t}from"./iframe-BFkYxjpi.js";import{S as d}from"./SearchField-CQfWyzgg.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BKS-oikn.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-Jpu9zhJ4.js";import"./utils-Cvg_SbFj.js";import"./useLocalizedStringFormatter-CfQ5XL6Z.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-k3VPT5oz.js";import"./useFocusRing-DhM4Chk4.js";import"./index-1TDjJkgb.js";import"./index-Bfl55b4y.js";import"./useFormValidation-CqZHtoXh.js";import"./useField-B0sWGxFk.js";import"./Button-CPeoJlq9.js";import"./Hidden-BxbGe5dx.js";import"./useLabels-BHCtKWaQ.js";import"./useButton-w70hhn_t.js";import"./search-Dc5gr4e4.js";import"./createLucideIcon-Dk_ZVBqn.js";import"./ClearButton-DdE1z_C7.js";import"./Button-C3X5dVZs.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-3SxVOfHu.js";import"./VisuallyHidden-CKZ765x3.js";import"./x-D-DQfH5Z.js";import"./FieldError-CieRBtPV.js";import"./Text-B49sPC4A.js";import"./Text-f7GuBcHW.js";import"./RSPContexts-CX5DCwKf.js";import"./Collection-BK1fJAbU.js";import"./index-B4kv5YcN.js";import"./DragAndDrop-CHmEgGRC.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-hnY6KiAM.js";import"./SelectionManager-BEe4ixjS.js";import"./useEvent-C1J2zTQJ.js";import"./useDescription-BbdIQJUv.js";import"./inertValue-eaazUsso.js";import"./useHighlightSelectionDescription-CldCXw9U.js";import"./useUpdateEffect-Ck8gwo2m.js";import"./ListKeyboardDelegate-BhusCfZS.js";import"./useHasTabbableChild-V7nQu15x.js";import"./Checkbox-CetkY3WQ.js";import"./Form-CecPzLQH.js";import"./check-D0L5Hkv2.js";import"./useToggleState-Ba6EMyZH.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
