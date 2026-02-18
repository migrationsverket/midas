import{r as m,f as l,j as t}from"./iframe-UKNJQjU7.js";import{S as d}from"./SearchField-BkL2Jdf0.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CEHwyFZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-Cm6797Xw.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DMxiQw5s.js";import"./utils-ZaspRvtG.js";import"./useLocalizedStringFormatter-DzhvNqYY.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BEeFRIUC.js";import"./useFocusRing-BeIXTmL-.js";import"./index-BeTr8JYW.js";import"./index-Cs6Wfmrv.js";import"./useFormValidation-CUAGv13k.js";import"./useField-BOrveTUw.js";import"./Button-ktQggvc6.js";import"./Hidden-DcgeNwze.js";import"./useLabels-Egh2Tmf-.js";import"./useButton-B8VBkWrX.js";import"./search-GEBi0sd7.js";import"./createLucideIcon-VUHoQ9n0.js";import"./ClearButton-BPplLbmv.js";import"./Button-CwlpoN3f.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-B6bHgHU4.js";import"./VisuallyHidden-B64N4Qj2.js";import"./x-Dq6kRcYA.js";import"./FieldError-D2l5qYM7.js";import"./Text-DJmal9QH.js";import"./Text-DpfK05TX.js";import"./RSPContexts-hVdnM1Ff.js";import"./Collection-D1NK0Ykh.js";import"./index-DbODyXeb.js";import"./DragAndDrop-q8SK9mnk.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-BckInOsy.js";import"./SelectionManager-rMVQjgor.js";import"./useEvent-CAWk4ACy.js";import"./useDescription-tMahdvfR.js";import"./inertValue-DOpkP2KD.js";import"./useHighlightSelectionDescription-Df_-SFiq.js";import"./useUpdateEffect-4LONECmn.js";import"./ListKeyboardDelegate-B-Q8YBCs.js";import"./useHasTabbableChild-CbEzvTmJ.js";import"./Checkbox-BxdeGfy9.js";import"./Form-B99ZdxCN.js";import"./check-CUBALR_a.js";import"./useToggleState-LcVg0Hys.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
