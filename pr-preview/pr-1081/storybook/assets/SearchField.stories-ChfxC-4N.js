import{r as m,f as l,j as t}from"./iframe-Ca9PeS4b.js";import{S as d}from"./SearchField-Bjs0rl0-.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-DqX3GGp5.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-55nfPVrT.js";import"./utils-CUoV_pAF.js";import"./useLocalizedStringFormatter-CRS5dirU.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bo7lxpx9.js";import"./useFocusRing-B56DIc1T.js";import"./index-n_MeXCZI.js";import"./index-CcFOlZnw.js";import"./useFormValidation-0CkrV3-A.js";import"./useField-Bs-tUlaz.js";import"./Button-DLBOkC9W.js";import"./Hidden-ZKBw_h0J.js";import"./useLabels-5MQe5wH1.js";import"./useButton-jHPk0lvT.js";import"./search-e-prV6tx.js";import"./createLucideIcon-CT83y0Ua.js";import"./ClearButton-CT6X9qD-.js";import"./Button-DaI6b5l3.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-fmn21mIk.js";import"./VisuallyHidden-BJAuUKrr.js";import"./x-BHPi5tAp.js";import"./FieldError-3WYDLCHb.js";import"./Text-ZWT-9m7v.js";import"./Text-DlcQ59dF.js";import"./RSPContexts-ByQqD1Vo.js";import"./Collection-JenPJx5t.js";import"./index-DsiYp3bc.js";import"./DragAndDrop-Co0ixOQg.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-DLnP5b2N.js";import"./SelectionManager-BxeXuy6l.js";import"./useEvent-CTqepDA6.js";import"./useDescription-BxWKVtdh.js";import"./inertValue-2O-pX42I.js";import"./useHighlightSelectionDescription-BB7Fk6If.js";import"./useUpdateEffect-Dv2SI9js.js";import"./ListKeyboardDelegate-QYpzlqB7.js";import"./useHasTabbableChild-nMZceFKp.js";import"./Checkbox-7mBji1OD.js";import"./Form-hfyf2anb.js";import"./check-BYrzzCqG.js";import"./useToggleState-ClshfQWe.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
