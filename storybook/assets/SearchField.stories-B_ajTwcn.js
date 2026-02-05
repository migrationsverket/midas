import{r as m,f as l,j as t}from"./iframe-BEec9xws.js";import{S as d}from"./SearchField-DWvOhGbf.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C7V6eux0.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BAzuR8Jv.js";import"./utils-tmadhNLO.js";import"./useLocalizedStringFormatter-DPYn3iJZ.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bg4NdGaF.js";import"./useFocusRing-CHLWvWfU.js";import"./index-jsa7VRLI.js";import"./index-BPo6dsF7.js";import"./useFormValidation-Bw69zpyk.js";import"./useField-7d8i6LLe.js";import"./Button-DWX0vVyl.js";import"./Hidden-uHrwE7I5.js";import"./useLabels-B9n4tFRy.js";import"./useButton-G3mO1U0h.js";import"./search-CH0ytIwJ.js";import"./createLucideIcon-BEU2T1Tc.js";import"./ClearButton-Cs4fSlYJ.js";import"./Button-ZBZN_eZh.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-piak_TFz.js";import"./VisuallyHidden-B_EbF9d8.js";import"./x-DNVtugLs.js";import"./FieldError-2T8QeYCV.js";import"./Text-CEDi3dsy.js";import"./Text-Cqp2sCpU.js";import"./RSPContexts-COK32NAs.js";import"./Collection-D3spvIRq.js";import"./index-C2h17Hkd.js";import"./DragAndDrop-Q-k-vzm1.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-COZ8q6cB.js";import"./SelectionManager-Bp8NDSgY.js";import"./useEvent-e5sb6lYY.js";import"./useDescription-CLIom5bP.js";import"./inertValue-DtCUBPf0.js";import"./useHighlightSelectionDescription-CUb2GUxx.js";import"./useUpdateEffect-BjBz_Gki.js";import"./ListKeyboardDelegate-BNbwgrMg.js";import"./useHasTabbableChild-CRkkL3u3.js";import"./Checkbox-6c_iCCMC.js";import"./Form-BJTstxyD.js";import"./check-BVZC8sAP.js";import"./useToggleState-IlNucxpu.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
