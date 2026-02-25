import{r as m,f as l,j as t}from"./iframe-0ay5Cl7Z.js";import{S as d}from"./SearchField-DBhcihV8.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BYNSlAJ8.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DdivwlC8.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-BZfBuZ3A.js";import"./useObjectRef-DG4zbPWe.js";import"./useLocalizedStringFormatter-Bev7EFEw.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BqqX8DDI.js";import"./useFocusRing-BCxb_ufh.js";import"./useFocusable-B634M_Fb.js";import"./index-9qv7Fem8.js";import"./index-U-aVmNqW.js";import"./useFormValidation-Cy5tbrL6.js";import"./useField-DyriZxff.js";import"./Button-DxAruj7U.js";import"./utils-OwhIF6Yv.js";import"./Hidden-BzPJJaE1.js";import"./number-DfkVkf0F.js";import"./useLabels-BQsB-eC9.js";import"./useButton-Dk5PjSpe.js";import"./search-CuSo4ZW9.js";import"./createLucideIcon-C-V0PVLC.js";import"./ClearButton-FKklZKc0.js";import"./Button-C9_6wCAg.js";import"./Button.module-D_C6WeTN.js";import"./useLocalizedStringFormatter-CA3dvWhn.js";import"./VisuallyHidden-DQAFa958.js";import"./x-CV-T8NX-.js";import"./FieldError-BsAQJ2uy.js";import"./Text-DfthMNVx.js";import"./Text-BGuljUD0.js";import"./RSPContexts-CAeNAO0k.js";import"./Collection-DvvkxIOw.js";import"./CollectionBuilder-BTJH7Kto.js";import"./index-Dfbi8MRN.js";import"./DragAndDrop-BvzIZV0-.js";import"./getScrollParent-Bg5c39wC.js";import"./scrollIntoView-DBszQ3_a.js";import"./SelectionIndicator-zqXirjR8.js";import"./SelectionManager-Cp7KGgYq.js";import"./useEvent-5vUs9lWK.js";import"./useDescription-f161JRhm.js";import"./inertValue-CBzdp4Ld.js";import"./useHighlightSelectionDescription-SQL0JOil.js";import"./useUpdateEffect-q6vMMHpi.js";import"./ListKeyboardDelegate-vxkeYpMQ.js";import"./useHasTabbableChild-D2wY-Diz.js";import"./Checkbox-mtyNjXBn.js";import"./Form-U_9riSua.js";import"./check-DsBPdSOr.js";import"./useToggleState-DqjR02Kj.js";const be={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,p]=m.useState(""),[s]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=s.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:p,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const we=["SimpleSearch"];export{i as SimpleSearch,we as __namedExportsOrder,be as default};
