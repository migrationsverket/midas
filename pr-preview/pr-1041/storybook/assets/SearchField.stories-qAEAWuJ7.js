import{r as m,f as l,j as t}from"./iframe-X3mj68t3.js";import{S as d}from"./SearchField-Cxni2yPy.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-C2MTQdPQ.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGtnjhE_.js";import"./utils-DTPrts_7.js";import"./useLocalizedStringFormatter-BdsuAGwL.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Bt5iotie.js";import"./useFocusRing-A-SYz4Bz.js";import"./index-BNiETeWH.js";import"./index-CgJQ_hcF.js";import"./useFormValidation-BhwNd55G.js";import"./useField-BqKadYEg.js";import"./Button-B9l0bgEJ.js";import"./Hidden-ozg39Vr6.js";import"./useLabels-DEY-9MxO.js";import"./useButton-CupICIN9.js";import"./search-CyGh6lgv.js";import"./createLucideIcon-DXrZJMlk.js";import"./ClearButton-Df2BDUZT.js";import"./Button-BVJ0mzNb.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-DzOxC-Qk.js";import"./VisuallyHidden-BBlGikRY.js";import"./x-DPV5jirE.js";import"./FieldError-ND8ftnbY.js";import"./Text-dnG1hIAI.js";import"./Text-BWheoq0_.js";import"./RSPContexts-DnDgit_C.js";import"./Collection-CbMVQR1w.js";import"./index-P7Fh13u4.js";import"./DragAndDrop-hS-G8412.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-ZmvL6AbJ.js";import"./SelectionManager-9uZXtExn.js";import"./useEvent-cKzqiIgZ.js";import"./useDescription-C7T8B3ZX.js";import"./inertValue-AvhOBPof.js";import"./useHighlightSelectionDescription-BfTROmK2.js";import"./useUpdateEffect-DgXh_gH6.js";import"./ListKeyboardDelegate-Dt2iVvkm.js";import"./useHasTabbableChild-C_1ps6-3.js";import"./Checkbox-B1S8k6-y.js";import"./Form-ZEnz4t2S.js";import"./check-BIZLSA6t.js";import"./useToggleState-2Ss1JAMY.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
