import{r as m,f as l,j as t}from"./iframe-yxLRWdXt.js";import{S as d}from"./SearchField-BqkTRbFI.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-Dx3FjKju.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Ck-VtJ3k.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DAjRfDGl.js";import"./utils-RUxwEKRT.js";import"./useLocalizedStringFormatter-BxQYxci3.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BVpehf1p.js";import"./useFocusRing-CMPG7W5-.js";import"./index-Me9fHHrS.js";import"./index-DoQ_J8kd.js";import"./useFormValidation-DGLvbmhm.js";import"./useField-CVp2Igha.js";import"./Button-DaOEEwin.js";import"./Hidden-CvV1DSEo.js";import"./useLabels-DUi63ROe.js";import"./useButton-wbPnMjSj.js";import"./search-DCzoK2uI.js";import"./createLucideIcon-D4BAvLWW.js";import"./ClearButton-BpmfZhRh.js";import"./Button-CDWvCVpB.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-CPEv82p3.js";import"./VisuallyHidden-C3h4Jc2h.js";import"./x-GEzuGirk.js";import"./FieldError-BnWIpF2n.js";import"./Text-HPHn4yG2.js";import"./Text-CX657Sqj.js";import"./RSPContexts-DOW2uIFv.js";import"./Collection-CqaV5I6I.js";import"./index-Cz2SOsmz.js";import"./DragAndDrop-CJelqbZ5.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-3XQggShf.js";import"./SelectionManager-DgRUFJsG.js";import"./useEvent-pDZ8-eJ4.js";import"./useDescription-BBPfKYuj.js";import"./inertValue-DBI6_MLV.js";import"./useHighlightSelectionDescription-DFxoIKLz.js";import"./useUpdateEffect-B53FwWc3.js";import"./ListKeyboardDelegate-DBm2wJ9q.js";import"./useHasTabbableChild-BJjWyXKs.js";import"./Checkbox-De1YgR-s.js";import"./Form-BId1s1Ft.js";import"./check-beJY09FD.js";import"./useToggleState-CmYmAd6n.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
