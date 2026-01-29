import{r as m,f as l,j as t}from"./iframe-DLG9UKPd.js";import{S as d}from"./SearchField-BIikN2tt.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CAfBAi0K.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-1fNSVGjT.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DKvDtRay.js";import"./utils-DBUuZCdW.js";import"./useLocalizedStringFormatter-DIbN7jUK.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Co9_Q0hz.js";import"./useFocusRing-CPajt0l2.js";import"./index-BfkNjs9H.js";import"./index-Dhh4UqYu.js";import"./useFormValidation-DMkWfSjQ.js";import"./useField-BIKHvwdL.js";import"./Button-TurWYA_F.js";import"./Hidden-BrEjSDmZ.js";import"./useLabels-Bt1wH29Q.js";import"./useButton-DVAUhmi8.js";import"./search-C4rbRj2i.js";import"./createLucideIcon-BPNvabKa.js";import"./ClearButton-IsKEQ4Fc.js";import"./Button-BSBQeMEK.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-BgfRRBj_.js";import"./VisuallyHidden-CqsIInob.js";import"./x-Cu5S1DSw.js";import"./FieldError-crXTrtj0.js";import"./Text-BSfpdnWo.js";import"./Text-RyRTgpJt.js";import"./RSPContexts-B1mSspvQ.js";import"./Collection-D7DCZQ7p.js";import"./index-BkR-K3nJ.js";import"./DragAndDrop-DROK-5RQ.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-_XobMEGX.js";import"./SelectionManager-Cs0Oc9Y9.js";import"./useEvent-B9M_w_TJ.js";import"./useDescription-CNKvzn77.js";import"./inertValue-Dg--08ZG.js";import"./useHighlightSelectionDescription-CfXBZPcx.js";import"./useUpdateEffect-DzFth_IX.js";import"./ListKeyboardDelegate-CAHUNpaI.js";import"./useHasTabbableChild-B8ePmxIH.js";import"./Checkbox-C6quzD6P.js";import"./Form-DM08mJyW.js";import"./check-DPXEDnf6.js";import"./useToggleState-rZiiUv1g.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
