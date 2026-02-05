import{r as m,f as l,j as t}from"./iframe-BKVZlbwK.js";import{S as d}from"./SearchField-Bl8kmoRt.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-BFz571St.js";import"./preload-helper-PPVm8Dsz.js";import"./TextField.module-DpzeWGpt.js";import"./clsx-Ciqy0D92.js";import"./clsx-B-dksMZM.js";import"./useControlledState-DGZkTwEL.js";import"./utils-DPuolxVc.js";import"./useLocalizedStringFormatter-B2KN6w1Y.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-Cc-YORei.js";import"./useFocusRing-B5vFDtZh.js";import"./index-PkL0TDm3.js";import"./index-BKxFf4CA.js";import"./useFormValidation-B2K6ECOw.js";import"./useField-_-3BWxJQ.js";import"./Button-BXNg7Jsx.js";import"./Hidden-BRpSC0Ka.js";import"./useLabels-BVLaKNrB.js";import"./useButton-BvRx9rmC.js";import"./search-BEqWb11X.js";import"./createLucideIcon-DBPtg95-.js";import"./ClearButton-CVVdZ8sN.js";import"./Button-CMuF6ttX.js";import"./Button.module-Co5e5YHp.js";import"./useLocalizedStringFormatter-hBwIhHtL.js";import"./VisuallyHidden-DRvu9CAK.js";import"./x-grlvjwkz.js";import"./FieldError-DDgadqx5.js";import"./Text-B3d4ibdb.js";import"./Text-B3rWnA0b.js";import"./RSPContexts-B4IeL1gt.js";import"./Collection-BX0rPR2l.js";import"./index-B_usJpQo.js";import"./DragAndDrop-BhRiP2CP.js";import"./getScrollParent-Cpn7MDkE.js";import"./scrollIntoView-CtWAMHuk.js";import"./SelectionIndicator-CWqxxjhH.js";import"./SelectionManager-D5x3q2vB.js";import"./useEvent-vLHKVDXB.js";import"./useDescription-xVVRlRNW.js";import"./inertValue-WlAZVww0.js";import"./useHighlightSelectionDescription-DX8l-Z2I.js";import"./useUpdateEffect-v_WCjThL.js";import"./ListKeyboardDelegate-CWBS7xji.js";import"./useHasTabbableChild-CFPUJHi8.js";import"./Checkbox-CStRSk00.js";import"./Form-C1pExWr0.js";import"./check-Qq4Sjrl0.js";import"./useToggleState-C9pi_6aw.js";const xe={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
