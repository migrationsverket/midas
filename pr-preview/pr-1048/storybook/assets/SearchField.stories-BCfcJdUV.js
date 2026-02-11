import{r as m,f as l,j as t}from"./iframe-f5MFKuki.js";import{S as d}from"./SearchField-Bjx9vq6u.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CTer0Qgs.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DpRXGdPw.js";import"./utils-CkYTzifC.js";import"./useLocalizedStringFormatter-DvLnM0F6.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-DFa5MfZ1.js";import"./useFocusRing-D3kj-ql7.js";import"./index-K7RQRMNz.js";import"./index-CBu1rMHP.js";import"./useFormValidation-BvliZLgp.js";import"./useField-Oo0u04Fu.js";import"./Button-DuvywlRj.js";import"./Hidden-DBQGh8ME.js";import"./number-DfkVkf0F.js";import"./useLabels-7SDlHi18.js";import"./useButton-DT2Xmgs5.js";import"./search-CAySPF3R.js";import"./createLucideIcon-BR5g7LJ9.js";import"./ClearButton-CXRbZOXH.js";import"./Button-BxqYbrPc.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BPMFMRiW.js";import"./VisuallyHidden-TWnsdG0a.js";import"./x-n2W0P4og.js";import"./FieldError-C3VFwJG_.js";import"./Text-DdMXnW5-.js";import"./Text-BnjALTAb.js";import"./RSPContexts-Ckd37Azt.js";import"./Collection-DLH3cw_n.js";import"./index-B9FxiXbT.js";import"./DragAndDrop-8m3ybJuC.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ClChMsu_.js";import"./SelectionManager-C5l9lJFC.js";import"./useEvent-CCpoTy8x.js";import"./useDescription-fgVPMTaH.js";import"./inertValue-Bx7mlUwG.js";import"./useHighlightSelectionDescription-p5pu1DzH.js";import"./useUpdateEffect-DJ8xcir6.js";import"./ListKeyboardDelegate-c8qeyItX.js";import"./useHasTabbableChild-BZrF4Hfn.js";import"./Checkbox-BKcazHOv.js";import"./Form-BwEBjvIv.js";import"./check-CHZZHOp7.js";import"./useToggleState-D6nen1y1.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const Se=["SimpleSearch"];export{i as SimpleSearch,Se as __namedExportsOrder,Te as default};
