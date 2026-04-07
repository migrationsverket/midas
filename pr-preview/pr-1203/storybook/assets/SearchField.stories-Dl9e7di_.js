import{r as m,f as l,j as t}from"./iframe-BObKWO8P.js";import{S as d}from"./SearchField-DbeUIWmc.js";import{T as c,a as u,C as h,b as f,R as x,c as T}from"./Table-CKmKFCgS.js";import"./preload-helper-PPVm8Dsz.js";import"./utils-L1ZXEAM0.js";import"./clsx-B-dksMZM.js";import"./Form-DVIWY3z8.js";import"./useFocusRing-CEJP2sKk.js";import"./index-DZLGwHwk.js";import"./index-w-ZTYn4u.js";import"./Input-Sgu-PXBi.js";import"./Hidden-pBI9L9bQ.js";import"./Button-Bj1Gx374.js";import"./useLabel-CCF_4gB4.js";import"./useLabels-CPcqYQYg.js";import"./useButton-0-s8uA0b.js";import"./FieldError-C85eAV5x.js";import"./Text-B0SIJ0ar.js";import"./clsx-Ciqy0D92.js";import"./Text-BL0-OeDh.js";import"./RSPContexts--YEt9orp.js";import"./Group-DN6AoKzN.js";import"./useControlledState-2AKkTK1v.js";import"./useLocalizedStringFormatter-DdHSxoKc.js";import"./LocalizedStringFormatter-wnoc2RuQ.js";import"./useTextField-BGTqg0R_.js";import"./useField-B2ENXugf.js";import"./TextField.module-DdivwlC8.js";import"./search-D6zBbICX.js";import"./createLucideIcon-Bq0_1Yjp.js";import"./x-Ci83I339.js";import"./useLocalizedStringFormatter-Bt1-Aj9O.js";import"./Button-CF3n8BCq.js";import"./Button.module-BB7N-cLd.js";import"./VisuallyHidden-C2-WAH_L.js";import"./Collection-BvFqWJhU.js";import"./index-Bvyw-qy_.js";import"./DragAndDrop-BwaC43xP.js";import"./getScrollParent-BEOCR9gy.js";import"./scrollIntoView-CMGg4YQW.js";import"./SelectionIndicator-BgMQIXdK.js";import"./SelectionManager-CHzFMA0s.js";import"./useEvent-BEm0Eqbv.js";import"./useDescription-CgE9sFBH.js";import"./inertValue-B_S8ouiP.js";import"./useHighlightSelectionDescription-COF8jlai.js";import"./useUpdateEffect-R1-tQbDT.js";import"./ListKeyboardDelegate-BWCuCnFj.js";import"./useHasTabbableChild-8BogfyTE.js";import"./Checkbox-DCNOX01K.js";import"./check-03ofgQbS.js";import"./useToggleState-CiNoaRur.js";const Te={title:"Examples/Search",tags:["autodocs"],argTypes:{}},i={args:{},render:function(){const o=[{name:"Frukt",id:"fruit",isRowHeader:!0},{name:"Beskrivning",id:"description"}],[n,s]=m.useState(""),[p]=m.useState(()=>l.map((e,r)=>({id:r+1,fruit:e.name,description:e.description}))),a=p.filter(e=>e.fruit.toLowerCase().includes(n.toLowerCase()));return t.jsxs("div",{style:{maxWidth:"400px",margin:"0 auto"},children:[t.jsx(d,{placeholder:"Sök efter en frukt...",buttonText:"Sök",onSubmit:s,style:{width:"100%"}}),n.length>0&&(a.length===0?t.jsx("p",{style:{marginTop:"10px"},children:"Inga träffar"}):t.jsx("div",{style:{marginTop:"20px"},children:t.jsxs(c,{"aria-label":"Fruit Table",style:{width:"100%"},children:[t.jsx(u,{children:o.map(e=>t.jsx(h,{isRowHeader:e.isRowHeader??!1,children:e.name},e.id))}),t.jsx(f,{children:a.map(e=>t.jsx(x,{children:o.map(r=>t.jsx(T,{children:e[r.id]},r.id))},e.id))})]})}))]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
