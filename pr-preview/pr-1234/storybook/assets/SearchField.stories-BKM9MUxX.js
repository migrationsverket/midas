import{r as m,f as l,j as t}from"./iframe-Cpv3N_Z7.js";import{S as d}from"./SearchField-BTzNn4O7.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-oCRl_dhF.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-Ds8IarQh.js";import"./clsx-B-dksMZM.js";import"./Form-N1eN9l9p.js";import"./useFocusRing-ypjCw1vR.js";import"./index-wkqyPuv6.js";import"./index-DfwSWRjw.js";import"./Input-DZ9x1R94.js";import"./Hidden-CRjjTzwz.js";import"./Button-yYifVGdg.js";import"./useLabel-DY4t24dq.js";import"./useLabels-Cb5TS_nA.js";import"./useButton-D1nJ6Ar2.js";import"./FieldError-DDdPNrDK.js";import"./Text-CBaNxGOV.js";import"./clsx-Ciqy0D92.js";import"./Text-CywvhZI_.js";import"./RSPContexts-B7j5fLyU.js";import"./Group-DtMaHiC2.js";import"./useControlledState-BJT8QsD-.js";import"./useLocalizedStringFormatter-Cxhkiabf.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BGLj0zfE.js";import"./useField-D1U1wsM_.js";import"./TextField.module-DdivwlC8.js";import"./search-DT8ktvTZ.js";import"./createLucideIcon-CPN07aPY.js";import"./x-F7c5yWaB.js";import"./useLocalizedStringFormatter-DBqNCzPo.js";import"./Button-DMMScCvt.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-UFh7Pb-i.js";import"./Collection-CQWma8za.js";import"./index-zYi_m5tq.js";import"./DragAndDrop-aABONeGY.js";import"./getScrollParent-DFT_DoLJ.js";import"./scrollIntoView-CvDQ6PuP.js";import"./SelectionIndicator-DNA7WQpC.js";import"./SelectionManager-BKEpkWWf.js";import"./useEvent-ryaXYS60.js";import"./useDescription-zO_rmDkP.js";import"./inertValue-CE5iK2Q2.js";import"./useHighlightSelectionDescription-BfzLHFVw.js";import"./useUpdateEffect-D0eEjsqV.js";import"./ListKeyboardDelegate--0GCoeKZ.js";import"./useHasTabbableChild-CrMMLqZT.js";import"./Checkbox-CHYgH7bZ.js";import"./check-DlLjoKJV.js";import"./useToggleState-CwdLunz8.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
